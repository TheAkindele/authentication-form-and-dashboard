import React, {useState} from "react";
import { Button } from "./components/Button";
import {Sidebar, AuthSider} from "./components/Sidebar"
import {Auth, Dashboard} from "./screens"

function App() {
  const [logged, setLogged] = useState(false)
  const [screen, setScreen] = useState(1)

  return (
    <div className="app">
      {logged && (
        <>
          <div className="side-cont">
            <Sidebar />
          </div>
          <div className="content">
            <Auth />
          </div>
        </>
      )}
      {!logged && (
        <>
          <div className="log-sider-cont">
            <AuthSider />
          </div>
          <div className="log-content">
            <Dashboard />
          </div>
        </>
      )}
      
    </div>
  );
}

export default App;
