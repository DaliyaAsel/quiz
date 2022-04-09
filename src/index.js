import React from 'react';
import ReactDOM from 'react-dom';

import { QuizProvider } from './contexts/quiz';
import Quiz from './components/Quiz';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

