export interface SurveyData {
  [key: string]: any;
}

export interface SurveyOptions {
  showSaveInProgress: () => void;
  showSaveSuccess: (message?: string) => void;
  showSaveError: (message?: string) => void;
}

export interface SurveyConfig {
  surveyId: string;
  surveyPostId: string;
}

export interface SurveyServiceConfig {
  baseUrl: string;
  maxPostSize: number;
}
