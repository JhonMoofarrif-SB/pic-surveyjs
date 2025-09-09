import { useCallback } from 'react';
import { Model } from 'survey-core';
import type { SurveyOptions } from '../types';

// Configuration constants
const SURVEY_SERVICE_URL =
  import.meta.env.VITE_SURVEY_SERVICE_URL || 'https://api.surveyjs.io/public/v1/Survey';
const SURVEY_IO_MAX_POST_SIZE = 65536;

export const useSurveyService = () => {
  const loadSurvey = useCallback(async (survey: Model, surveyId: string): Promise<void> => {
    survey.beginLoading();

    try {
      const response = await fetch(`${SURVEY_SERVICE_URL}/getSurvey?surveyId=${surveyId}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      survey.fromJSON(data);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Could not load the survey JSON schema';
      console.error('Survey loading error:', errorMessage);
      throw new Error(errorMessage);
    } finally {
      survey.endLoading();
    }
  }, []);

  const postResults = useCallback(
    async (survey: Model, options: SurveyOptions, surveyPostId: string): Promise<void> => {
      const resultAsStr = JSON.stringify(survey.data);

      // Check if survey results exceed the maximum post size
      if (resultAsStr.length >= SURVEY_IO_MAX_POST_SIZE) {
        const errorMessage =
          survey.getLocalizationString('savingExceedSize') || 'Survey results exceed maximum size';
        options.showSaveError(errorMessage);
        throw new Error(errorMessage);
      }

      // Show saving progress
      options.showSaveInProgress();

      const dataObj = {
        postId: surveyPostId,
        surveyResult: resultAsStr,
      };

      try {
        const response = await fetch(`${SURVEY_SERVICE_URL}/post/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(dataObj),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Show success message
        options.showSaveSuccess();

        // Log success in development
        if (import.meta.env.DEV) {
          console.log('Survey results posted successfully');
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Could not post the survey results';
        console.error('Survey posting error:', errorMessage);
        options.showSaveError(errorMessage);
        throw error;
      }
    },
    []
  );

  return {
    loadSurvey,
    postResults,
  };
};
