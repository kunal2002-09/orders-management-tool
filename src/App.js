import { SnackbarProvider } from "notistack";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />

  },
  {
    path: "/",
    element: <LandingPage />
  }
]);


function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>

    </div>
  );
}

export default App;

