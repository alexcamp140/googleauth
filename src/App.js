import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import { SecurePage } from "./routes/SecurePage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/securepage",
    element:<SecurePage/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
