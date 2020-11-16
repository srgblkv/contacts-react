import { ContactsTable } from "../ContactsTable";

import { useContacts } from "./useContacts";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    headContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);

export const Contacts = () => {
  const contacts = useContacts();
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.headContainer}>
          <Typography variant="h5" component="h1">
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <CircularProgress />;
            }
            if (contacts.isError) {
              return <div>!!!Error!!!</div>;
            }
            return <ContactsTable data={contacts.data} />;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
