import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import "../css/purgescss.css"
import "./styles.scss"
import App from "./App"

import modules from "./modules"
import { ErrorHandler } from "./components/shared"
import { MainLayout } from "./components/layout"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<MainLayout />}>
            {modules.map((props, idx) => {
              return (
                <Route
                  index={idx === 0}
                  key={props.path}
                  path={props.path}
                  element={<props.main />}
                />
              )
            })}
          </Route>
        </Route>

        <Route
          path='*'
          element={<ErrorHandler status={404} message='Page not found' />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
