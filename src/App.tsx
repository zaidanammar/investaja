import React from "react";

import Routes from "./routes";
import ONavbar from "./components/organisms/ONavbar";

function App() {
  return (
    <main className="md:px-10 px-4 md:pt-28 pt-24 w-full h-full">
      <ONavbar />
      <Routes />
    </main>
  );
}

export default App;
