import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "reactstrap";
import DEFAULT_URL from '../utils/url';

const API = DEFAULT_URL;

const MisFavoritos = () => {
  
  const [contactos, setContactos] = useState([]);

  const getContactos = async() => {
    const res = await fetch(API+'/api/contact/read');
    const data = await res.json();
    setContactos(data.contactos);
  }

  useEffect(() => {
    getContactos();
  }, [])


  return (
    <>
     <h1>Mis Favoritos</h1>
      <Container>
        <br />
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto) => 
            (
              contacto.favorito ? (
                <tr key={contacto._id}>
                  <td>{contacto.nombre}</td>
                  <td>{contacto.apellido}</td>
                  <td>{contacto.telefono}</td>
                  <td>{contacto.correo}</td>
                </tr>
              ) : null
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default MisFavoritos;