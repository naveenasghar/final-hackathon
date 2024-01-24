// import { useState } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Signup from "./Signup";
// import Login from './Login'
// import Home from './Home'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Cookies from 'js-cookie';
// function App() {

//   const loginDataCookie = Cookies.get('loginData');

//   // Use the value as needed
//   if (loginDataCookie) {
//       // Do something with the cookie value
//       console.log('loginData cookie value:', JSON.parse(loginDataCookie));
//   } else {
//       console.log('loginData cookie not found');
//   }

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/register" element={<Signup />}> </Route>
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="/home" element={<Home />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import ShowCaseForm from './ShowCaseForm';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


const App = () => {
  const loginDataCookie = Cookies.get('loginData');

  const RedirectToHome = () => <Navigate to="/home" />;
  const RedirectToLogin = () => <Navigate to="/login" />;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={loginDataCookie ? <RedirectToHome /> : <Signup />} />
          <Route path="/*" element={loginDataCookie ? <RedirectToHome /> : <Login />} />
          <Route path="/home" element={loginDataCookie ? <Home /> : <RedirectToLogin />} />
          <Route path="/project-submit" element={loginDataCookie ? <ShowCaseForm /> : <RedirectToLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
