import React ,{useState} from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "./tableStyle";
import axios from "axios";
import ModelAffecterNouveauClient from "./ModelAffecterNouveauClient"
const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState("")
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;


  function Delete(key) {
    
    axios.delete(`http://localhost:3001/admin/nouveauClients/${tableData[key][0]}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(resul => {
      props.setClients(props.clients.filter(item=>item[0]!==tableData[key][0]))

      
    }).catch(err => {
      console.log(err)
    })

  }


  function Affecter(key){
    setId(tableData[key][0])
    setOpen(true)

  }
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {

            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key1) => {
                  // eslint-disable-next-line no-lone-blocks
                  {
                    if (prop !== "") return (
                      <TableCell className={classes.tableCell} key={key1}>
                        {prop}
                      </TableCell>
                    ); else return (
                      <TableCell className={classes.tableCell} key={key1}>
                        <i onClick={() => Affecter(key) }className="fa fa-pencil" style={{ fontSize: "22px", color: "green", cursor: "pointer" }}></i>
                        <i onClick={() => Delete(key)} className="fa fa-close" style={{ fontSize: "25px", color: "red", cursor: "pointer", marginLeft: "11px" }}></i>
                      </TableCell>
                    )
                  }
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ModelAffecterNouveauClient isOpen={open}  setModal={setOpen} id={id} clients={props.clients} setClients={props.setClients} />
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};