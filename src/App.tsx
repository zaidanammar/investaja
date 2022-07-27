import React from "react";

import Routes from "./routes";
import ONavbar from "./components/organisms/ONavbar";
import MDateBar from "./components/molecules/MDateBar";

function App() {
  return (
    <main className="pt-20 w-full h-full">
      <ONavbar />
      <MDateBar />
      <Routes />
    </main>
  );
}

export default App;
