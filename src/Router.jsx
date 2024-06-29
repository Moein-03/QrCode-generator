import { Routes, Route } from "react-router-dom";

import App from './App.jsx'

export const AppRoute = () => {
             return (
             <Routes>
               <Route path='/generate' element={<App/>} />
             </Routes>
             )
};