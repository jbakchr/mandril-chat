import { RouterProvider } from "react-router-dom";

import { GlobalState } from "./context/GlobalState";
import { router } from "./routing/router";

function App() {
  return (
    <GlobalState>
      <RouterProvider router={router} />
    </GlobalState>
  );
}

export default App;
