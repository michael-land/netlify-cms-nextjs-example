import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
  TableContainer
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { usePagination, useSortBy, useTable, UseTableOptions } from "react-table";

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    height: "100%",
    overflow: "auto",
    WebkitOverflowScrolling: "touch"
  }
}));

interface DataTable extends UseTableOptions<any> {}

const DataTable = React.memo<DataTable>(function DataTable(props) {
  const classes = useStyles();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<any>(
    props,
    useSortBy,
    usePagination
  );

  const head = (
    <TableHead>
      {headerGroups.map((headerGroup, index) => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <TableCell {...column.getHeaderProps()} style={{ top: index * 34, zIndex: 2 }}>
              {column.canSort ? (
                <TableSortLabel
                  {...column.getSortByToggleProps()}
                  active={column.isSorted}
                  direction={column.isSortedDesc ? "desc" : "asc"}
                >
                  {column.render("Header")}
                </TableSortLabel>
              ) : (
                column.render("Header")
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );

  const body = (
    <TableBody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <TableRow {...row.getRowProps()}>
            {row.cells.map(cell => (
              <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );

  const empty = (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Typography variant="h6">No data</Typography>
    </Box>
  );

  return (
    <TableContainer className={clsx(classes.root)}>
      {rows.length > 0 ? (
        <Table size="small" {...getTableProps()}>
          {head}
          {body}
        </Table>
      ) : (
        empty
      )}
    </TableContainer>
  );
});

export default DataTable;
