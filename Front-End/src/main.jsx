import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/homepage/home';
import './styles/style.css'


const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
