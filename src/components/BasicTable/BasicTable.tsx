import {
  Box,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TableHeader from "../TableHeader/TableHeader";
import { Order, Value } from "../../types";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getError, getTags, loadTagsRequest } from "../../redux/tagsRedux";
import { AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";


const BasicTable = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderDirection, setOrderDirection] = useState<Order>("desc");
  const [valueToOrderBy, setValueToOrderBy] = useState<Value>("popular");

  useEffect(() => {
    dispatch(
      loadTagsRequest(page, rowsPerPage, orderDirection, valueToOrderBy)
    );
  }, [dispatch, page, rowsPerPage, orderDirection, valueToOrderBy]);

  const tagItems = useSelector(getTags);
  const errorStatus = useSelector(getError);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: Value
  ) => {
    const isDesc: boolean =
      valueToOrderBy === property && orderDirection === "desc";
    setValueToOrderBy(property);
    setOrderDirection(isDesc ? "asc" : "desc");
    setPage(0)
  };

  return (
    <Paper
      sx={{
        width: "80vw",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 4,
      }}
    >
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        px={1}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <Typography
          variant="h4"
          component="a"
          href="/"
          sx={{ flexGrow: 2, color: "inherit", textDecoration: "none" }}
        >
          Stack Exchange Tags
        </Typography>
        <Box>
          <TablePagination
            component="div"
            page={page}
            rowsPerPageOptions={[10, 25, 50]}
            count={-1}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Stack>
      <TableContainer sx={{ maxHeight: "80vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {errorStatus?.success ? (
              tagItems.map((tag) => (
                <TableRow key={tag.name} hover>
                  <TableCell>{tag.name}</TableCell>
                  <TableCell>{tag.count}</TableCell>
                </TableRow>
              ))
            ) : errorStatus?.pending ? (
              <TableRow>
                <TableCell colSpan={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={2}>
                  <Box
                    component="section"
                    sx={{ p: 2, display: "flex", justifyContent: "center" }}
                  >
                    Sorry! {`${errorStatus?.error}`}
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default BasicTable;
