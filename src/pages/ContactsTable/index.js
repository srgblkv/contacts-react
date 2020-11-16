import format from "date-fns/format";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { CopyToClipboardText } from "../../components/CopyToClipboardText";
import { NATIONALITIES_NAMES } from "../../constants/nationality";

const useStyles = makeStyles({
  table: {},
});

export const ContactsTable = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.login.uuid}>
              <TableCell>
                <Avatar src={item.picture.thumbnail} alt={item.name.first} />
              </TableCell>
              <TableCell>
                {`${item.name.title}. ${item.name.first} ${item.name.last}`}
              </TableCell>
              <TableCell>
                <Typography>
                  {format(new Date(item.dob.date), "cccc, L/d/yyyy, h:mm:ss a")}
                </Typography>
                <Typography>{item.dob.age} years</Typography>
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={item.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={item.phone} />
              </TableCell>
              <TableCell>
                <Typography>\{item.location.country}\</Typography>
                <Typography>
                  {`${item.location.street.number} ${item.location.street.name}, ${item.location.city}, ${item.location.state} ${item.location.postcode}`}
                </Typography>
              </TableCell>
              <TableCell>{NATIONALITIES_NAMES[item.nat]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
