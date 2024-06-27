import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
       <>
           <div></div>
           <Routes>
            <Route path={'/'} element={<DashboardPage />}/>
           </Routes>
       </>
  );
}

export default App;
