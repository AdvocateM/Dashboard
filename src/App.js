import Dash from "./pages4dash/home/Home";
import Login from "./pages4dash/login/Login";
import List from "./pages4dash/list/List";
import Single from "./pages4dash/single/Single";
import New from "./pages4dash/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Material from "./pages4dash/material/material";
import React from 'react';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          

          <Route path="/dashboard">
            <Route index element={<Dash />} />
            <Route path="login" element={<Login />} />
            <Route path="/dashboard/users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="/dashboard/material">
              <Route index element={<Material />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
