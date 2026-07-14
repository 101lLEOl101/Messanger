import React from 'react';
import { AuthPage } from './pages/Auth.pages';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ErrorPage} from "./pages/error.pages";

export const App: React.FC = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/auth/" element={<AuthPage/>} />
              <Route path={"*"} element={<ErrorPage code={"404"}/>} />
          </Routes>
      </BrowserRouter>
    );
};
