import { useState } from "react";
import { Button, Modal, Form, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";

const AddTodo = () => {
    const [modal, setModal] = useState(false);
    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const handleClose = () => setModal(false);
    const handleShow = () => setModal(true);

    return (
        <>
            <Button className="mt-2 mb-2" variant="info" onClick={handleShow}>
                Nauja užduotis
            </Button>
            <Modal show={modal} onHide={handleClose}>
                <Modal.Header>Sukurti naują užduotį</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label for="title">Pavadinimas</Form.Label>
                            <Form.Control type="text" value={task.title} name="title" id="title" placeholder="Ivesk apvadinimą" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label for="title">Aprašymas</Form.Label>
                            <Form.Control
                                type="textarea"
                                value={task.description}
                                name="description"
                                id="description"
                                placeholder="Ivesk apvadinimą"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit">Pridėti</Button>
                    <Button onClick={handleClose}>Uždaryti</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddTodo;
