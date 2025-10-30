import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Blogs from './Blogs'
import Contact from './Contact'
import NoModule from './NoModule';
import Mobile from './Mobile';
import Email from './Email';
import Signup from './Signup';
import Login from './Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/Contact" element={<Contact/>}>
            <Route path="Mobile" element={<Mobile/>}/>
            <Route path="Email" element={<Email/>}/>
            </Route>
      <Route path="*" Component={NoModule}/>
      <Route path="/Signup" Component={Signup}/>
      <Route path="/Login" Component={Login}/>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
