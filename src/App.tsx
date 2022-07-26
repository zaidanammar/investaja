import React from "react";

import Routes from "./routes";
import ONavbar from "./components/organisms/ONavbar";

function App() {
  return (
    <main className="container w-full mx-auto h-full">
      <ONavbar />
      <Routes />
    </main>
  );
}

export default App;
