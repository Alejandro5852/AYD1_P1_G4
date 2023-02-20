import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import ModificarContacto from '../Modificar-Contacto/ModificarContacto'

const Contactos = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleCloseModal = () => {
    setModalOpen(false);
    setItemSelected(null);
  }

  const handleOpenModal = () => {
    setItemSelected({name: 'Juan', apellido: 'Perez', telefono: 123456789, correo: 'test@gmail.com'});
    setModalOpen(true);
  }

  return (
    <>
      <div>Contactos</div>

      <Button variant="primary" onClick={handleOpenModal}>
        Simulacion editar
      </Button>

      <ModificarContacto open={modalOpen} onClose={handleCloseModal} item={itemSelected} />
    </>
  )
}

export default Contactos