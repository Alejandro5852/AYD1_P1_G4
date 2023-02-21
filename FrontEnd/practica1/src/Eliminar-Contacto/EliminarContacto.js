import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import DEFAULT_URL from '../utils/url';
import './form.css';

const API = DEFAULT_URL;


const EliminarContacto = (props) => {
  
  const {  handleSubmit, reset} = useForm();
  const [txtSave, setTxtSave] = useState("Eliminar contacto");
  
  
  const customSubmit = async(data) => {
    setTxtSave("Eliminando...");

    await fetch(API+'/api/contact/delete',{
        method: 'DELETE',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            _id: data._id,
        })
      }).then((res)=>{
        alert("Se elimino el contacto correctamente!");
        setTxtSave("Contacto eliminado.");
        props.onClose();
      }).catch((err)=>{
        alert("No se pudo eliminar el contacto.");
        setTxtSave("Contacto no eliminado.");
      })
    }

  function handleUpdate() {
    handleSubmit(customSubmit)();
  }

  useEffect(() => {
    reset(props.item);
  }, [props.item, reset])
  
  return (
    <>
      <Modal show={props.open} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar eliminar contacto</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleUpdate}>
            {txtSave}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EliminarContacto