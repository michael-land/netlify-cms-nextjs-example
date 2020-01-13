import { Anchor, DataTable } from "@/components";
import { makeData } from "@/utils";
import { Views } from "@/views";
import { Box, Button, Toolbar, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import React from "react";
import { attributes } from "../../content/page/stages.md";

interface Stages {}

const data = makeData(
  gen => ({
    stage: gen.random.number({ max: 100 }),
    floor_plan: "/",
    squareFeet: gen.random.number(),
    size: gen.random.number(),
    has_central_ac: gen.random.boolean(),
    has_sound_booth: gen.random.boolean(),
    has_gold_rooms: gen.random.boolean(),
    has_concrete_sub_floor: gen.random.boolean()
  }),
  15
);
const columns: DataTable["columns"] = [
  {
    accessor: "stage",
    Header: "Stage"
  },
  {
    accessor: "floor_plan",
    Header: "Floor Plan",
    disableSortBy: true,
    Cell: ({ cell: { value } }) =>
      value ? (
        <Anchor color="secondary" href={String(value)}>
          View
        </Anchor>
      ) : null
  },
  {
    accessor: "squareFeet",
    Header: "Sq. Ft."
  },
  {
    accessor: "size",
    Header: "Size"
  },
  {
    accessor: "has_central_ac",
    Header: "Cental AC",
    Cell: ({ cell: { value } }) => (value ? <CheckIcon /> : null)
  },
  {
    accessor: "has_sound_booth",
    Header: "Sound Booth",
    Cell: ({ cell: { value } }) => (value ? <CheckIcon /> : null)
  },
  {
    accessor: "has_gold_rooms",
    Header: "Gold Rooms",
    Cell: ({ cell: { value } }) => (value ? <CheckIcon /> : null)
  },
  {
    accessor: "has_concrete_sub_floor",
    Header: "Concrete Sub Floor",
    Cell: ({ cell: { value } }) => (value ? <CheckIcon /> : null)
  }
];

const Stages = React.memo<Stages>(function Stages({ ...other }) {
  return (
    <Views.Detail {...attributes}>
      <Toolbar>
        <Button style={{ marginLeft: "auto" }} variant="contained" color="primary">
          Download Complete Chart
        </Button>
      </Toolbar>
      <Box my={8}>
        <Typography variant="h4">SOUND STAGE CHART</Typography>
      </Box>
      <DataTable columns={columns} data={data} />
      <Box my={8}>
        <Typography variant="h4">RANCH CHART</Typography>
      </Box>
      <DataTable columns={columns} data={data} />
      <Box my={8}>
        <Typography variant="h4">RANCH CHART 2</Typography>
      </Box>
      <DataTable columns={columns} data={data} />
    </Views.Detail>
  );
});

export default Stages;
