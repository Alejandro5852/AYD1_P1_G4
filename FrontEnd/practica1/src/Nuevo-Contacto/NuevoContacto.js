import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import './style.css';
import DEFAULT_URL from '../utils/url';

const API = DEFAULT_URL;

const NuevoContacto = () => {
  const { register, handleSubmit, formState: {errors}} = useForm()

  const customSubmit = async(data) => {
      //console.log(data)
      await fetch(API+'/api/contact/create',{
      method: 'POST',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify({
          nombre: data.name,
          apellido: data.apellido,
          telefono: data.telefono,
          correo: data.correo
      })
    }).then((res)=>{console.log(res)})
    alert("Usuario agregado de manera exitosa!")
  }

  return (
    <>
      <h2>Registro de contactos</h2>

      <form onSubmit={handleSubmit(customSubmit)} className='form-react'>
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
          <button type='submit'>Agregar</button>
      </form>
    
    </>
  )
}

export default NuevoContacto