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

  const addFavorite = async(item) => {
    await fetch(API+'/api/contact/addfavorite',{
      method: 'PATCH',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify({
        _id: item._id,
        favorito: true
      })
    }).then((res)=>{
      alert("Añadido a favoritos exitosamente!");
    }).catch((err)=>{
      alert("Error al Añadir a favoritos");
    })
    getContactos();
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
            contactos.map((item) => {
              return (
                <>
                  <Col xs={12}>
                    <Card style={{ marginBottom: '20px', textAlign: 'left' }} key={item._id}>
                      <Card.Body>
                        <Card.Title>{item.nombre} {item.apellido}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.telefono} - {item.correo}</Card.Subtitle>
                        <Button variant="primary" onClick={() => handleOpenModal(item)}>
                          Editar contacto
                        </Button>
                        <Button variant="danger" title="Eliminar contacto" onClick={() => callOpenModal(item)}>
                        Eliminar contacto
                        </Button>
                        {
                          !item.favorito ? 
                          (
                            <Button variant="warning" title="Añadir a favoritos" onClick={() => addFavorite(item)}>
                              Añadir a favoritos
                            </Button>
                          ) : null
                        }
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