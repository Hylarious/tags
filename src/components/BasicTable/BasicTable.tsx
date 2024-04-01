import { Paper, Table, TableContainer } from "@mui/material";
import { useState } from "react";
import TableHeader from "../TableHeader/TableHeader";
import { Order, Value } from "../../types";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getError, getTags, loadTagsRequest } from "../../redux/tagsRedux";
import { AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import PageHeader from "../PageHeader/PageHeader";
import TagTableBody from "../TagTableBody/TagTableBody";

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
    setPage(0);
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
      <PageHeader
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <TableContainer sx={{ maxHeight: "80vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TagTableBody errorStatus={errorStatus} tagItems={tagItems} />
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default BasicTable;
