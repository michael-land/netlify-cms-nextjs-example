import { Anchor, DataTable } from "@/components";
import { makeData } from "@/utils";
import { Views } from "@/views";
import { Box, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import React from "react";

const useStyles = makeStyles(theme => ({}));

interface Stages {}

const Stages = React.memo<Stages>(function Stages({ ...other }) {
  const columns = React.useMemo(
    () =>
      [
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
      ] as DataTable["columns"],
    []
  );

  const data = React.useMemo(
    () =>
      makeData(
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
      ),
    []
  );

  return (
    <Views.Detail
      contacts={[
        {
          type: "phone",
          values: ["+86 150.3832.5566 Main Line", "+1 310.801.1902  Hollywood Rep."]
        },
        { type: "hours", values: ["M-F, 9AM-5PM (International Division)"] },
        {
          type: "address",
          values: [
            "Ningbo Screen Industrual Park",
            "Xinqiao, Xiangshan, Ningbo, Zhejiang 315726, P.R.C."
          ]
        },
        { type: "email", values: ["info@xgslot.com"] }
      ]}
      heroImage="https://xgslot.brown.now.sh/static/uploads/warring-states-1.jpg"
      title="Stages"
      description="Warner Bros. Studio Facilities has thirty-six Sound Stages, ranging in size from 6,000 to 32,000 square feet located on our main lot and Ranch facilities. We work to accommodate the needs of our production clients and have added central air and support rooms to many of stages creating “Premium” and “Deluxe” audience stages. All of our stages have stories to tell from productions past and present. Stage 16, one of the tallest in the world with a 2,000,000 gallon water tank, was raised to its current height for the feature “Cain and Mabel” in 1935 and is now one of the favorite stages for large audience shows such as “The Voice.” Please contact our Studio Operations Group for availability, rates and to schedule a scout."
    >
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
