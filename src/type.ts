import { GridProps } from "@material-ui/core";

export interface GenericProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface FieldGenericProps {
  name: string;
  label?: string;
  helperText?: string;
  nake?: boolean;
}

export interface GenericProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type Gridable = Pick<GridProps, "xs" | "md" | "sm" | "lg" | "xl">;

declare module "react-table" {
  // take this file as-is, or comment out the sections that don't apply to your plugin configuration

  export interface TableOptions<D extends object>
    extends UseExpandedOptions<D>,
      UseFiltersOptions<D>,
      UseGroupByOptions<D>,
      UsePaginationOptions<D>,
      UseRowSelectOptions<D>,
      UseSortByOptions<D>,
      UseFiltersOptions<D>,
      UseResizeColumnsOptions<D>,
      // note that having Record here allows you to add anything to the options, this matches the spirit of the
      // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
      // feature set, this is a safe default.
      Record<string, any> {}

  export interface TableInstance<D extends object = {}>
    extends UseColumnOrderInstanceProps<D>,
      UseExpandedInstanceProps<D>,
      UseFiltersInstanceProps<D>,
      UseGroupByInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseRowSelectInstanceProps<D>,
      UseRowStateInstanceProps<D>,
      UseSortByInstanceProps<D> {}

  export interface TableState<D extends object = {}>
    extends UseColumnOrderState<D>,
      UseExpandedState<D>,
      UsePaginationState<D>,
      UseRowSelectState<D>,
      UseSortByState<D> {}

  export interface Column<D extends object = {}>
    extends UseFiltersColumnOptions<D>,
      UseGroupByColumnOptions<D>,
      UseSortByColumnOptions<D>,
      UseResizeColumnsColumnOptions<D> {
    type?:
      | "number"
      | "text"
      | "date"
      | "date-distance"
      | "rating"
      | "id"
      | "rid"
      | "boolean"
      | "currency";
    align?: "left" | "right" | "center";
    padding?: "checkbox" | "none" | "default";
    borderLeft?: boolean;
    borderRight?: boolean;
  }

  export interface ColumnInstance<D extends object = {}>
    extends UseFiltersColumnProps<D>,
      UseGroupByColumnProps<D>,
      UseSortByColumnProps<D>,
      UseResizeColumnsColumnProps<D> {}

  export interface Cell<D extends object = {}>
    extends UseTableCellProps<D>,
      UseGroupByCellProps<D>,
      UseRowStateCellProps<D> {}

  export interface Row<D extends object = {}>
    extends UseExpandedRowProps<D>,
      UseGroupByRowProps<D>,
      UseRowSelectRowProps<D>,
      UseRowStateRowProps<D> {}
}
