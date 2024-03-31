import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { TableHeaderProps, Value } from "../../types";

const TableHeader: React.FC<TableHeaderProps> = ({
  valueToOrderBy,
  orderDirection,
  handleRequestSort,
}) => {
  const createSortHandler =
    (property: Value) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: "50%" }}>
          <TableSortLabel
            active={valueToOrderBy === "name"}
            direction={valueToOrderBy === "name" ? orderDirection : "desc"}
            onClick={createSortHandler("name")}
          >
            Tags
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            active={valueToOrderBy === "popular"}
            direction={valueToOrderBy === "popular" ? orderDirection : "desc"}
            onClick={createSortHandler("popular")}
          >
            Number of posts
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
