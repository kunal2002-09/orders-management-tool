import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Login from "../components/Login";
import { SnackbarProvider } from "notistack";
import {
  BrowserRouter,
} from "react-router-dom";


describe("Login Component", () => {
  
 
  
  test("renders Login title", () => {
  

    render(
      <BrowserRouter>
     <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
       <Login/>
      </SnackbarProvider>
        </BrowserRouter>
    );
    const titleElement = screen.getByText(/login to orders/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders input fields", () => {
    render(
      <BrowserRouter>
     <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
       <Login/>
      </SnackbarProvider>
        </BrowserRouter>
    );
    const usernameField = screen.getByLabelText(/username or email/i);
    console.log(usernameField)
    const passwordField = screen.getByLabelText(/password/i);
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  test("displays error message if username is not entered", async () => {
    render(
      <BrowserRouter>
     <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
       <Login/>
      </SnackbarProvider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:'Login'});
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText(/username is a required field/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message if username is less than 6 characters", async () => {
    render(
      <BrowserRouter>
     <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
       <Login/>
      </SnackbarProvider>
        </BrowserRouter>
    );
    const usernameField = screen.getByLabelText(/username or email/i);
    const loginButton = screen.getByRole("button",{name:'Login'});
    fireEvent.change(usernameField, { target: { value: "test" } });
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText(/username must be at least 6 characters/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message if password is not entered", async () => {
    render(
      <BrowserRouter>
     <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
       <Login/>
      </SnackbarProvider>
        </BrowserRouter>
    );
    const usernameField = screen.getByLabelText(/username or email/i);
    const loginButton = screen.getByRole("button",{name:'Login'});
    fireEvent.change(usernameField, { target: { value: "testuser" } });
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText(/password is a required field/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message if password is less than 6 characters", async () => {
    render(
      <BrowserRouter>
     <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
       <Login/>
      </SnackbarProvider>
        </BrowserRouter>
    );
    const usernameField = screen.getByLabelText(/username or email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button",{name:'Login'});
    fireEvent.change(usernameField, { target: { value: "testuser" } });
    fireEvent.change(passwordField, { target: { value: "test" } });
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText(/password must be at least 6 characters/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message if username or email is incorrect", async () => {
    render(
      <BrowserRouter>
     <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
       <Login/>
      </SnackbarProvider>
        </BrowserRouter>
    );
    const usernameField = screen.getByLabelText(/username or email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button",{name:'Login'});
    fireEvent.change(usernameField, { target: { value: "testuser" } });
    fireEvent.change(passwordField, { target: { value: "12345678" } });
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText(/username or email is incorrect/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message if password is incorrect", async () => {
    render(
      <BrowserRouter>
     <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
       <Login/>
      </SnackbarProvider>
        </BrowserRouter>
    );
    const usernameField = screen.getByLabelText(/username or email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button",{name:'Login'});
    fireEvent.change(usernameField, { target: { value: "kunalmehla@gmail.com" } });
    fireEvent.change(passwordField, { target: { value: "test123456"}})
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText(/password is incorrect/i);
    expect(errorMessage).toBeInTheDocument();
  });
  test("displays success message if username and password is correct", async () => {
    render(
      <BrowserRouter>
     <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
       <Login/>
      </SnackbarProvider>
        </BrowserRouter>
    );
    const usernameField = screen.getByLabelText(/username or email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button",{name:'Login'});
    fireEvent.change(usernameField, { target: { value: "kunalmehla@gmail.com" } });
    fireEvent.change(passwordField, { target: { value: "12345678"}})
    fireEvent.click(loginButton);
    const errorMessage = await screen.findByText(/logged in successfully/i);
    expect(errorMessage).toBeInTheDocument();
  });
})
