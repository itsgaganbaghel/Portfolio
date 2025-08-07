import React from "react";
import NavBarIndex from "./Components/NavBarComponents/NavBarIndex";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./Components/utilities/ScrollToTop";
import CustomCursor from "./Components/utilities/CustomCursor";

const App = () => {
  return (
    <section className="w-full min-h-screen bg-primary text-white relative">
      <ScrollToTop />
      <CustomCursor />
      <NavBarIndex />
      <section className="w-full min-h-[90vh]">
        <Outlet />
      </section>
    </section>
  );
};

export default App;
