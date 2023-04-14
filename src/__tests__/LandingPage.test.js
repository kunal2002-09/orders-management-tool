import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LandingPage from "../components/LandingPage";
import Login from "../components/Login";
import { createMemoryHistory } from "history";
import {
    BrowserRouter,
  } from "react-router-dom";

describe("LandingPage", () => {
    const history = createMemoryHistory();
  it("renders search input and table rows", async () => {
    render(
    <BrowserRouter>
    <LandingPage />
    </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText(
      "Search by Order id, Vendors name, Date or Status"
    );
    expect(searchInput).toBeInTheDocument();
    const tableRows = await screen.findAllByTestId("table-row");
    expect(tableRows.length).toBeGreaterThan(0);
  });

  it("filters table rows based on search term", async () => {
    render(<BrowserRouter>
        <LandingPage />
        </BrowserRouter>);
    const searchInput = screen.getByPlaceholderText(
      "Search by Order id, Vendors name, Date or Status"
    );
    fireEvent.change(searchInput, { target: { value: "pending" } });
    const tableRows = await screen.findAllByTestId("table-coloumn-status");
    expect(tableRows.length).toBeGreaterThan(0);
    tableRows.forEach((row) => {
      expect(row).toHaveTextContent("Pending");
    });
  });

  it("navigates to login page when user is not logged in", async () => {
  
    localStorage.clear()
    render(<BrowserRouter>
    <Login/>
        <LandingPage />
        </BrowserRouter>);
        
   let route=location.href;
   route=route.split('/')
   expect(route[3]).toBe("login");
  });
});
