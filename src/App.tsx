import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SurveyComponent } from './features/survey';
import { Creator } from './features/creator';

function App() {
  return (
    <Router>
        
        <Routes>
          <Route path="/" element={<SurveyComponent />} />
          <Route path="/creator" element={<Creator />} />
        </Routes>
    </Router>
  );
}

export default App;
