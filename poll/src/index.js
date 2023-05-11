import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FirstQuestion, SecondQuestion, Thanks } from './Components/ImportedFiles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/firstquestion" element={<FirstQuestion />} />
        <Route path="/secondquestion" element={<SecondQuestion />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
