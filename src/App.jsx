import * as React from "react";
import {Signup, Home, Error, Dashboard} from "src/component";
import { Routes, Route, Outlet, Link } from "react-router-dom";
function App() {

  return (
    <>
        <Routes>
           <Route>
                <Route index element={<Home/>} />
                <Route path="/" element={<Home />} />
                <Route path="signup" element={<Signup />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </>
  )
}

export default App