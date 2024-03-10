import React from "react";
import { Modal, Button } from "react-bootstrap";

const BeerModal = ({ show, onHide, beer }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <img src={beer.image_url} alt={beer.name} className="card-img-top" />
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>{beer.name}</strong>
        </p>
        <p>{beer.description}</p>
        <p>
          <strong>Manufacturing Date: </strong>
          {beer.first_brewed}
        </p>
        <p>
          <strong>Tagline: </strong> {beer.tagline}
        </p>
        <p>
          <strong>Contributed_by: </strong> {beer.contributed_by}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <center>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </center>
      </Modal.Footer>
    </Modal>
  );
};

export default BeerModal;
