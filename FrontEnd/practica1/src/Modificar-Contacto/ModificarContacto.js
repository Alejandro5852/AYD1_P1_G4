import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import DEFAULT_URL from '../utils/url';
import './form.css';

const API = DEFAULT_URL;


const ModificarContacto = (props) => {
  
  const { register, handleSubmit, formState: {errors}, reset} = useForm();
  const [txtSave, setTxtSave] = useState("Guardar cambios");
  const formRef = useRef(null);
  
  const customSubmit = async(data) => {
    setTxtSave("Actualizando...");

    await fetch(API+'/api/contact/update',{
      method: 'PATCH',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify({
          _id: data._id,
          nombre: data.nombre,
          apellido: data.apellido,
          telefono: data.telefono,
          correo: data.correo
      })
    }).then((res)=>{
      alert("Actualizacion completada exitosamente!");
      setTxtSave("Guardar cambios");
      props.onClose();
    }).catch((err)=>{
      alert("Error al actualizar el contacto");
      setTxtSave("Guardar cambios");
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
          <Modal.Title>Modificar contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="formUpdate" ref={formRef}  onSubmit={handleSubmit(customSubmit)} className='form-react'>
            <div className='form-control'>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {required:true})} />
                {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small>}
            </div>
            <div className='form-control'>
                <label>Apellido</label>
                <input type="text" {...register('apellido', {required:true})} />
                {errors.apellido?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small>}
            </div>
            <div className='form-control'>
                <label>Telefono</label>
                <input type="number" {...register('telefono', {
                      required:true
                  })} />
                  {errors.telefono?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small>}
            </div>
            <div className='form-control'>
                <label>Correo</label>
                <input type="text" {...register('correo', {
                      required:true,
                      pattern: /\S+@\S+\.\S+/
                })} />
                {errors.correo?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small>}
                {errors.correo?.type === 'pattern' && <small className='fail'>Correo electronico no valido</small>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            {txtSave}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModificarContacto