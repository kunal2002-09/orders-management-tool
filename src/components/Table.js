
import {  Stack, Chip } from "@mui/material";
import React from "react";

function Table({
  data,

}) {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100vw",
        }}
        key={data.order_id}
        data-testid="table-row"
      >

        <Chip
          label={data.order_id}
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            background: "none",
            width: "30vw",
            justifyContent: "flex-start",
          }}
        />
        <Chip
          label={data.vendor_name}
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            background: "none",
            width: "30vw",
            justifyContent: "flex-start",
          }}
        />
        <Chip
          label={data.pickup_date}
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            background: "none",
            width: "30vw",
            justifyContent: "flex-start",
          }}
        />


        <Chip
          label={data.status}
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            background: "none",
            width: "30vw",
            justifyContent: "flex-start",
          }}
          data-testid='table-coloumn-status'
        />

      </Stack>
      <hr
        style={{
          width: "100vw",
          background: "rgba(216, 216, 216, 0.5)",
        }}
      />
    </>
  );
}

export default Table;
