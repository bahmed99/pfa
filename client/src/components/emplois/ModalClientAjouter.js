import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Modal,
  Label,
} from "reactstrap";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

export default function ModalClientAjouter(props) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const onClickAjouterSeance = async () => {
    if (title !== "" && localStorage.getItem("car") !== "0") {
      let seance;
      if (title === "Séance code" || title === "Séance conduite") {
        seance = {
          start: props.selectInfoData.startStr,
          end: props.selectInfoData.endStr,
          title: title,
          eventContent: props.dataUtilisateur.name,
          client: props.dataUtilisateur._id,
          color: "red",
          nomClient: props.dataUtilisateur.name,
        };
      } else {
        seance = {
          start: props.selectInfoData.startStr,
          end: props.selectInfoData.endStr,
          title: title,
          eventContent: props.dataUtilisateur.name,
          client: props.dataUtilisateur._id,
          color: "orange",
          nomClient: props.dataUtilisateur.name,
        };
      }

      props.setModal(false);
      axios
        .put(`http://localhost:3001/employe/emplois`, seance, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        })
        .then((result) => {
          axios.put("http://localhost:3001/car/addKm",seance,{
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
          })
          props.setDataUtilisateur(result.data);
          props.setData((prevData) => [...prevData, seance]);
          setTitle("");
        });
    } else if (localStorage.getItem("car") === "0") {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
    setTitle("");
  };

  return (
    <Modal
      className="modal-dialog-centered"
      size="sm"
      isOpen={props.isOpen}
      toggle={() => {
        props.setModal(!props.isOpen);
      }}
    >
      <div className="modal-body p-0 row align-self-center">
        <Card className=" shadow border-0 ">
          <CardHeader className="bg-transparent pb-1 row align-self-center">
            <h3>Ajouter une séance</h3>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-10">
            <Alert
              show={error}
              variant={"danger"}
              style={{ width: "550px", margin: "auto auto" }}
            >
              {"Votre voiture est hors service"}
            </Alert>

            <Form role="form">
              {/* <FormGroup>
                                <Label>Titre</Label>

                                <Input
                                    onChange={(e) => { setTitle(e.target.value) }}
                                />
                            </FormGroup> */}
              <FormGroup>
                <Label>Titre</Label>

                <Input
                  type="select"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                >
                  <option default value=""></option>
                  <option value="Séance code">Séance code</option>
                  <option value="Séance conduite">Séance conduite</option>
                  <option value="Examen code">Examen code</option>
                  <option value="Examen Conduite">Examen Conduite</option>
                </Input>
              </FormGroup>

              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={(e) => onClickAjouterSeance()}
                >
                  Ajouter
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Modal>
  );
}
