import React ,{useEffect, useState } from 'react'
import {Button, Modal} from "react-bootstrap"
import {useForm} from 'react-hook-form';
import DEFAULT_URL from '../utils/url';


const API = DEFAULT_URL;

const EliminarFavorito = (props) => {


    const {  handleSubmit, reset} = useForm();
    const [txtSave, setTxtSave] = useState("Eliminar favorito");

    const customSubmit = async(item) => {
        setTxtSave("Eliminando...");

        await fetch(API+'/api/contact/deletefavorite',{
          method: 'PATCH',
          headers: {"Content-Type": 'application/json'},
          body: JSON.stringify({
            _id: item._id,
            favorito: false
          })
        }).then((res)=>{
          alert("eliminado de favoritos exitosamente!");
          props.onClose()
        }).catch((err)=>{
          alert("Error al eliminar de favoritos");
        })
   
      }


    function handleUpdate() {
        handleSubmit(customSubmit)();
      }

      useEffect(() => {
        reset(props.item);
      }, [props.item, reset])
      


    return(
        <>
        <Modal show={props.open} onHide={props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar eliminar favorito</Modal.Title>
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

export default EliminarFavorito