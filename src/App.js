import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./component/common/loader";
import { routes } from "./routes";

function App() {
  const { loader } = useSelector((state) => state);
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={loader && <Loader />}>
          <Routes>
            {routes &&
              routes.map((route, index) => (
                <Route
                  path={route.path}
                  key={index}
                  exact={route.exact}
                  element={<route.element />}
                />
              ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
