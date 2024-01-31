import { render } from "nixix/dom";
import { Route, Routes } from "nixix/router";
import { Home, Profiles } from "./profiles";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={Home}
      />
      <Route
        path='/profiles'
        element={Profiles}
      />
    </Routes>
  );
};

render(AppRouter, document.body);
