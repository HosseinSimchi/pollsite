import {Button,Modal} from 'react-bootstrap';


const BasicModal = () => {

    return (
            <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog>
                <Modal.Header closeButton>
                <Modal.Title>START QUESTIONS</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Are you ready to start the Questions? (You have just two minutes)</p>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="primary">YES</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </div>
    )
}

export default BasicModal;