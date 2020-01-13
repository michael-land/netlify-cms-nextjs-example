import { Description } from "@/components";
import Form from "@/form";
import Page from "@/page/Page";
import {
  Box,
  Container,
  makeStyles,
  Paper,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid
} from "@material-ui/core";
import { capitalCase } from "change-case";
import GoogleMapReact from "google-map-react";
import { useSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { attributes } from "../../content/page/contact.md";

const useStyles = makeStyles(theme => ({}));

interface ContactUsPage {}

const defaultValues = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  telephone: "",
  nameOfProject: "",
  message: ""
};

const ContactUsPage = React.memo<ContactUsPage>(function ContactUsPage({ ...other }) {
  const { control, ...form } = useForm({ defaultValues });

  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Container maxWidth="md">
      <Page.Title>Contact Us</Page.Title>

      <Box my={4}>
        <Paper style={{ height: 400 }}>
          <GoogleMapReact
            defaultCenter={{ lat: 29.2930619, lng: 121.8439784 }}
            defaultZoom={13}
            yesIWantToUseGoogleMapApiInternals
          />
        </Paper>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Card>
            <CardHeader
              title="Need help?"
              subheader="Contact us for answers to all of your questions, Tell us about your issue so we can help
          you more quickly."
            />
            <CardContent>
              <Form
                onSubmit={form.handleSubmit(values => {
                  enqueueSnackbar("Message received.", { variant: "success" });
                  form.reset(defaultValues);
                })}
              >
                <Form.Input required name="firstName" control={control} />
                <Form.Input required name="lastName" control={control} />
                <Form.Input required name="emailAddress" control={control} />
                <Form.Input name="telephone" control={control} />
                <Form.Input name="nameOfProject" control={control} />
                <Form.Input
                  required
                  name="message"
                  multiline
                  rowsMax={10}
                  rows={4}
                  control={control}
                />
                <Form.Actions>
                  <Form.Submit />
                </Form.Actions>
              </Form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card>
            <CardHeader title="Address" />
            <CardContent>
              <Description
                data={attributes.contacts.map(contact => ({
                  term: capitalCase(contact.type),
                  value: contact.values.map(v => v.value)
                }))}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
});

export default ContactUsPage;
