import * as React from "react";
import {Signup, Home, Error, Dashboard} from "src/component";
import { Routes, Route, Outlet, Link } from "react-router-dom";
function App() {

  return (
    <>
        <div className="font-Semi-Regular">
            <Routes>
              <Route index element={<Home/>} />
              <Route path="/starter-landing/" element={<Home/>} />
              <Route path="/starter-landing/signup" element={<Signup/>} />
              <Route path="/starter-landing/dashboard" element={<Dashboard/>} />
              <Route path="/starter-landing/*" element={<Error/>} />
            </Routes>
        </div>

    </>
  )
}

export default App