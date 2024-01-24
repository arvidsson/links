import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import RecentLinksPage from "./pages/RecentLinksPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<App />}>
        <Route index element={<RecentLinksPage />} />
      </Route>
    </Routes>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
