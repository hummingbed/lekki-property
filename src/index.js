import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './components/about/About';
import Home from './components/home/Home';
import Property from './components/property/Property';
import SingleProperty from './components/singleproperty/SingleProperty';
import AddProperty from './components/addproperty/AddProperty';
import EditProperty from './components/editproperty/EditProperty';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/property" element={<Property />} />
            <Route path="/singleproperty/:id" element={<SingleProperty />} />
            <Route path="/Editproperty/:id" element={<EditProperty />} />
            <Route path="/addproperty" element={<AddProperty />} />
          </Routes>
      </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

