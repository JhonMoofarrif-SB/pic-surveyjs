import { useEffect, useState, useCallback } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/survey-core.min.css';

// import { themeJson } from './theme';
import { json } from './json';

import { useSurveyService } from '../../shared/hooks';
import { LoadingSpinner } from '../../ui/components';
import type { SurveyData, SurveyOptions } from '../../shared/types';

function SurveyComponent() {
  const [survey, setSurvey] = useState<Model | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { loadSurvey, postResults } = useSurveyService();

  const handleSurveyComplete = useCallback(
    async (sender: Model, options: SurveyOptions) => {
      try {
        const surveyData: SurveyData = sender.data;

        // Log survey completion (only in development)
        if (import.meta.env.DEV) {
          console.log('Survey completed with data:', surveyData);
        }

         await postResults(sender, options, json.surveyPostId);
      } catch (error) {
        console.error('Error handling survey completion:', error);
        options.showSaveError('Error saving survey results');
      }
    },
    [postResults]
  );

  useEffect(() => {
    const initializeSurvey = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const surveyModel = new Model();
        // surveyModel.applyTheme(themeJson as any);

        // Load survey configuration
        await loadSurvey(surveyModel, json.surveyId);

        // Set up completion handler
        surveyModel.onComplete.add(handleSurveyComplete);

        setSurvey(surveyModel);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize survey';
        setError(errorMessage);
        console.error('Survey initialization error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeSurvey();
  }, [loadSurvey, handleSurveyComplete]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className='survey-error'>
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (!survey) {
    return <h1>No survey found</h1>;
  }

  return <Survey model={survey} json />;
}

export default SurveyComponent;