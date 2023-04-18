import * as React from "react";
import {Signup, Home, Error, Dashboard} from "src/component";
import { Routes, Route, Outlet, Link, HashRouter  } from "react-router-dom";
function App() {
console.log(HashRouter)
  return (
    <>
        <div className="font-Semi-Regular">
            <Routes history={HashRouter}>
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