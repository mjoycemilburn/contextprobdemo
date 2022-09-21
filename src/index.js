import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Launchpad } from './routes/Launchpad';
import { Login } from './routes/Login';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);


  root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launchpad />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );


