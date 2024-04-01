import {
  Box,
  CircularProgress,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";
import React from "react";
import { TagTableBodyProps } from "../../types";

const TagTableBody: React.FC<TagTableBodyProps> = ({
  errorStatus,
  tagItems,
}) => {
  return (
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
  );
};
export default TagTableBody;
