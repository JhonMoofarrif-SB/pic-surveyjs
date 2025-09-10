// Survey Configuration
const surveyConfig = {
    surveyId: '6d00df7b-baf0-40a4-9745-2fb13e37824e',
    surveyPostId: '55af58a2-44ed-44d9-bf6d-98dfbc4cb4fa'
};

// Service Configuration
const SURVEY_SERVICE_URL = 'https://api.surveyjs.io/public/v1/Survey';
const SURVEY_IO_MAX_POST_SIZE = 65536;

// Theme Configuration
const themeJson = {
    "themeName": "flat",
    "colorPalette": "light",
    "isPanelless": true,
    "backgroundImage": "",
    "backgroundImageFit": "cover",
    "backgroundImageAttachment": "scroll",
    "backgroundOpacity": 1,
    "cssVariables": {
        "--sjs-editorpanel-cornerRadius": "8px",
        "--sjs-questionpanel-cornerRadius": "8px",
        "--sjs-questionpanel-backcolor": "rgba(255, 255, 255, 1)",
        "--sjs-font-family": "Open Sans",
        "--sjs-font-size": "16px",
        "--sjs-corner-radius": "8px",
        "--sjs-base-unit": "8px",
        "--sjs-shadow-small": "0px 0px 0px 1px rgba(0, 0, 0, 0.15)",
        "--sjs-font-questiontitle-weight": "400",
        "--sjs-font-questiontitle-color": "rgba(64, 64, 64, 1)",
        "--sjs-shadow-inner": "0px 0px 0px 1px rgba(0, 0, 0, 0.12)",
        "--sjs-border-default": "rgba(0, 0, 0, 0.12)",
        "--sjs-border-light": "rgba(0, 0, 0, 0.12)",
        "--sjs-general-backcolor": "rgba(246, 246, 246, 1)",
        "--sjs-general-backcolor-dark": "rgba(235, 235, 235, 1)",
        "--sjs-general-backcolor-dim-light": "rgba(255, 255, 255, 1)",
        "--sjs-general-backcolor-dim-dark": "rgba(235, 235, 235, 1)",
        "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
        "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
        "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
        "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
        "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
        "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
        "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
        "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
        "--sjs-primary-backcolor": "#ff0000",
        "--sjs-primary-backcolor-dark": "rgba(240, 0, 0, 1)",
        "--sjs-primary-backcolor-light": "rgba(255, 0, 0, 0.1)",
        "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
        "--sjs-special-red": "rgba(229, 10, 62, 1)",
        "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
        "--sjs-header-backcolor": "#F2F3F5"
    },
    "header": {
        "height": 40,
        "mobileHeight": 40,
        "inheritWidthFrom": "container",
        "textAreaWidth": 0,
        "backgroundImageFit": "cover",
        "backgroundImageOpacity": 100,
        "overlapEnabled": false,
        "logoPositionX": "left",
        "logoPositionY": "top",
        "titlePositionX": "left",
        "titlePositionY": "bottom",
        "descriptionPositionX": "left",
        "descriptionPositionY": "bottom"
    },
    "headerView": "advanced"
};

// Survey Service Functions
async function loadSurvey(survey, surveyId) {
    survey.beginLoading();

    try {
        const response = await fetch(`${SURVEY_SERVICE_URL}/getSurvey?surveyId=${surveyId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        survey.fromJSON(data);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Could not load the survey JSON schema';
        console.error('Survey loading error:', errorMessage);
        throw new Error(errorMessage);
    } finally {
        survey.endLoading();
    }
}

async function postResults(survey, surveyPostId) {
    const resultAsStr = JSON.stringify(survey.data);

    // Check if survey results exceed the maximum post size
    if (resultAsStr.length >= SURVEY_IO_MAX_POST_SIZE) {
        const errorMessage = survey.getLocalizationString('savingExceedSize') || 'Survey results exceed maximum size';
        showSaveError(errorMessage);
        throw new Error(errorMessage);
    }

    // Show saving progress
    showSaveInProgress();

    const dataObj = {
        postId: surveyPostId,
        surveyResult: resultAsStr
    };

    try {
        const response = await fetch(`${SURVEY_SERVICE_URL}/post/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(dataObj)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Show success message
        showSaveSuccess();
        console.log('Survey results posted successfully');
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Could not post the survey results';
        console.error('Survey posting error:', errorMessage);
        showSaveError(errorMessage);
        throw error;
    }
}

// UI Feedback Functions
function showSaveInProgress() {
    updateStatus('Saving survey results...', 'info');
}

function showSaveSuccess(message = 'Survey results saved successfully!') {
    updateStatus(message, 'success');
    setTimeout(() => {
        hideStatus();
    }, 3000);
}

function showSaveError(message = 'Error saving survey results') {
    updateStatus(message, 'error');
}

function updateStatus(message, type) {
    let statusDiv = document.getElementById('survey-status');
    if (!statusDiv) {
        statusDiv = document.createElement('div');
        statusDiv.id = 'survey-status';
        statusDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            font-weight: 500;
            z-index: 1000;
            max-width: 300px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        `;
        document.body.appendChild(statusDiv);
    }

    statusDiv.textContent = message;
    statusDiv.className = `survey-status-${type}`;
    
    // Set colors based on type
    switch (type) {
        case 'success':
            statusDiv.style.backgroundColor = 'rgba(25, 179, 148, 1)';
            break;
        case 'error':
            statusDiv.style.backgroundColor = 'rgba(229, 10, 62, 1)';
            break;
        case 'info':
            statusDiv.style.backgroundColor = 'rgba(67, 127, 217, 1)';
            break;
        default:
            statusDiv.style.backgroundColor = 'rgba(64, 64, 64, 1)';
    }
    
    statusDiv.style.display = 'block';
}

function hideStatus() {
    const statusDiv = document.getElementById('survey-status');
    if (statusDiv) {
        statusDiv.style.display = 'none';
    }
}

// Survey Completion Handler
async function handleSurveyComplete(sender) {
    try {
        console.log('Survey completed with data:', sender.data);
        await postResults(sender, surveyConfig.surveyPostId);
    } catch (error) {
        console.error('Error handling survey completion:', error);
        showSaveError('Error saving survey results');
    }
}

// Loading Spinner
function showLoadingSpinner() {
    const container = document.getElementById('surveyContainer');
    container.innerHTML = `
        <div style="
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 200px;
            flex-direction: column;
        ">
            <div style="
                width: 40px;
                height: 40px;
                border: 4px solid #f3f3f3;
                border-top: 4px solid #ff0000;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
            <p style="
                margin-top: 16px;
                color: rgba(64, 64, 64, 1);
                font-family: 'Open Sans', sans-serif;
                font-size: 16px;
            ">Loading survey...</p>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
}

function showError(message) {
    const container = document.getElementById('surveyContainer');
    container.innerHTML = `
        <div style="
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 200px;
            flex-direction: column;
            text-align: center;
            padding: 20px;
        ">
            <div style="
                color: rgba(229, 10, 62, 1);
                font-family: 'Open Sans', sans-serif;
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 16px;
            ">Error</div>
            <p style="
                color: rgba(64, 64, 64, 1);
                font-family: 'Open Sans', sans-serif;
                font-size: 16px;
                margin-bottom: 20px;
            ">${message}</p>
            <button onclick="window.location.reload()" style="
                background-color: #ff0000;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-family: 'Open Sans', sans-serif;
                font-size: 16px;
                cursor: pointer;
                font-weight: 500;
            ">Retry</button>
        </div>
    `;
}

// Initialize Survey
async function initializeSurvey() {
    try {
        showLoadingSpinner();

        const survey = new Survey.Model();
        survey.applyTheme(themeJson);

        // Load survey configuration from the service
        await loadSurvey(survey, surveyConfig.surveyId);

        // Set up completion handler
        survey.onComplete.add(handleSurveyComplete);

        // Render the survey
        survey.render(document.getElementById('surveyContainer'));

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to initialize survey';
        console.error('Survey initialization error:', error);
        showError(errorMessage);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSurvey);