import { Footer, MainNavbar } from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllRoutesData from "./data/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavbar />

        <Routes>
          {
            AllRoutesData.map(({ id, pathName, ComponentElement }) => (
              <Route key={id} path={pathName} element={< ComponentElement />} />
            ))
          }
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;