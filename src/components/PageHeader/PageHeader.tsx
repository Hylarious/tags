import { Box, Stack, TablePagination, Typography } from "@mui/material";
import { PageHeaderProps } from "../../types";

const PageHeader: React.FC<PageHeaderProps> = ({
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
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
  );
};

export default PageHeader;
