import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {useForm} from 'react-hook-form';

import './form.css';

const ModificarContacto = (props) => {
  
  const { register, handleSubmit, formState: {errors}, reset} = useForm();
  const [txtSave, setTxtSave] = useState("Guardar cambios");
  const formRef = useRef(null);
  
  const customSubmit = (data) => {
    setTxtSave("Actualizando...");
    setTimeout(() => {
      alert("Actualizacion pendiente!");
      setTxtSave("Guardar cambios");
      props.onClose();
    }, 2000);
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
                <input type="text" {...register('name', {required:true})} />
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