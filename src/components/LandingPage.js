import React from "react";
import { Search } from "@mui/icons-material";
import Pagination from "./Pagination";
import TableRow from "./Table";
import { orders } from "../orders";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  InputAdornment,
  TextField,
  Box,
  Stack,
  Chip,
} from "@mui/material";

let PageSize = 10;

const LandingPage = () => {
  const navigate = useNavigate();
  const [ordersData, setordersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    performApiCall();
  }, []);

  async function performApiCall() {
    try {
      let response = orders
      let username = localStorage.getItem('username')
      if (!username) {
        navigate('/login')
      }
      setordersData(response.data);
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    toSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);
  function handleChangeSearch(e) {
    setSearchTerm(e.target.value);
  }

  const toSearch = () => {
    if (searchTerm.length > 0) {

      const dataFilter = ordersData.filter(
        (item) =>
          item.order_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.vendor_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.pickup_date.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchData(dataFilter);
      setSearch(true);
    } else {
      setSearch(false);
    }
  };
  return (
    <>
      <Box
        className="content-container"
        sx={{ background: "#ffff", padding: "20px" }}
      >
        <Box className="searchBar" sx={{ padding: "0 20px" }}>
          <TextField
            className="search-desktop"
            size="small"
            fullWidth
            InputProps={{
              className: "search",
              endAdornment: (
                <InputAdornment position="end">
                  <Search color="primary" />
                </InputAdornment>
              ),
            }}
            placeholder="Search by Order id, Vendors name, Date or Status"
            name="search"
            value={searchTerm}
            onChange={(e) => handleChangeSearch(e)}
          />
        </Box>

        <Box sx={{ padding: "0 30px", overflow: "hidden" }}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100vw",
            }}

          >


            <Chip
              label={"Order Id"}
              sx={{
                fontSize: "1rem",
                fontWeight: "900",
                background: "none",
                width: "30vw",
                justifyContent: "flex-start",
              }}
            />
            <Chip
              label={"Vendors Name"}
              sx={{
                fontSize: "1rem",
                fontWeight: "900",
                background: "none",
                width: "30vw",
                justifyContent: "flex-start",
              }}
            />
            <Chip
              label={"Date"}
              sx={{
                fontSize: "1rem",
                fontWeight: "900",
                background: "none",
                width: "30vw",
                justifyContent: "flex-start",
              }}
            />
            <Chip
              label={"Status"}
              sx={{
                fontSize: "1rem",
                fontWeight: "900",
                background: "none",
                width: "30vw",
                justifyContent: "flex-start",
              }}
            />
          </Stack>
          <hr
            style={{ width: "100vw", background: "rgba(216, 216, 216, 0.5)" }}
          />
          <Box>
            <Grid
              container
              direction="row"
              spacing={{ xs: 1, md: 2 }}
              className="usersTable"
            >
              {search
                ? searchData
                  .slice(
                    currentPage * PageSize - PageSize,
                    currentPage * PageSize
                  )
                  .map((item) => {
                    return (
                      <Grid item key={item.order_id}>
                        <TableRow
                          data={item}
                          key={item._id}

                        />
                      </Grid>
                    );
                  })
                : ordersData
                  .slice(
                    currentPage * PageSize - PageSize,
                    currentPage * PageSize
                  )
                  .map((item) => {
                    return (
                      <Grid item key={item.order_id}>
                        <TableRow
                          data={item}
                          key={item._id}

                        />
                      </Grid>
                    );
                  })}
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: "0",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "25%",
            background: "#ffff",
          }}
        >

          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={search ? searchData.length : ordersData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Box>
      </Box>
    </>
  );
};
export default LandingPage;
