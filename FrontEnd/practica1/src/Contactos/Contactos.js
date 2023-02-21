import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ModificarContacto from '../Modificar-Contacto/ModificarContacto'
import EliminarContacto from '../Eliminar-Contacto/EliminarContacto'
import DEFAULT_URL from '../utils/url';

const API = DEFAULT_URL;

const Contactos = () => {

  const [contactos, setContactos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenDelete, setModalOpenDelete] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const getContactos = async() => {
    const res = await fetch(API+'/api/contact/read');
    const data = await res.json();
    console.log(data);
    setContactos(data.contactos);
  }

  const handleCloseModal = () => {
    getContactos();
    setModalOpen(false);
    setItemSelected(null);
  }

  const handleOpenModal = (item) => {
    setItemSelected(item);
    setModalOpen(true);
  }

  const callCloseModal = () => {
    getContactos();
    setModalOpenDelete(false)
    setItemSelected(null);
  }

  const callOpenModal = (item) => {
    setItemSelected(item);
    setModalOpenDelete(true);
  }

  useEffect(() => {
    getContactos();
  }, [])

  return (
    <>
      <h1>Contactos</h1>

      <Container>
        <Row >
          {
            contactos.map((item, index) => {
              return (
                <>
                  <Col xs={12}>
                    <Card style={{ marginBottom: '20px', textAlign: 'left' }} key={index}>
                      <Card.Body>
                        <Card.Title>{item.nombre} {item.apellido}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.telefono} - {item.correo}</Card.Subtitle>
                        <Button variant="primary" onClick={() => handleOpenModal(item)}>
                          Editar contacto
                        </Button>
                        <Button variant="danger" title="Eliminar contacto" onClick={() => callOpenModal(item)}>
                        Eliminar contacto
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )
            })
          }
        </Row>
      </Container>
      

      <ModificarContacto open={modalOpen} onClose={handleCloseModal} item={itemSelected} />
      <EliminarContacto open={modalOpenDelete} onClose={callCloseModal} item={itemSelected} />
    </>
  )
}

export default Contactos