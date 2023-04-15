"use client";
import { FC } from "react";
import { DataGrid, GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";

import { ApiRequest } from "@prisma/client";
import { useTheme } from "next-themes";
import { ThemeProvider, createTheme } from "@mui/material";

type ModifiedRequestType<K extends keyof ApiRequest> = Omit<ApiRequest, K> & {
  timestamp: string;
};

interface TableProps {
  userRequests: ModifiedRequestType<"timestamp">[];
}

const draftColumns: GridColDef[] = [
  {
    field: "col1",
    headerName: "API key used",
    width: 400,
  },
  { field: "col2", headerName: "Path", width: 250 },
  { field: "col3", headerName: "Recency", width: 250 },
  { field: "col4", headerName: "Duration", width: 150 },
  { field: "col5", headerName: "Status", width: 150 },
];

const columns = draftColumns.map((col) => ({
  ...col,
  renderHeader(params: GridColumnHeaderParams<any, any, any>) {
    return (
      <strong className="font-semibold">{params.colDef.headerName}</strong>
    );
  },
}));
const Table: FC<TableProps> = ({ userRequests }) => {
  const { theme: applicationTheme, systemTheme } = useTheme();
  const currentTheme =
    applicationTheme === "system" ? systemTheme : applicationTheme;
  const theme = createTheme({
    palette: {
      mode: currentTheme === "light" ? "light" : "dark",
    },
  });

  const rows = userRequests.map(
    ({ id, duration, timestamp, path, usedApiKey, status }) => ({
      id,
      col1: usedApiKey,
      col2: path,
      col3: `${timestamp} ago`,
      col4: `${duration} ms`,
      col5: status,
    })
  );
  return (
    <ThemeProvider theme={theme}>
      <DataGrid
        style={{
          background: currentTheme === "light" ? "white" : "#152238",
          fontSize: "1rem",
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        columns={columns}
        rows={rows}
      />
    </ThemeProvider>
  );
};

export default Table;
