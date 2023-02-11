import React from 'react'
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap';
import Contactos from '../Contactos/Contactos';
import MisFavoritos from '../Mis-Favoritos/MisFavoritos';
import NuevoContacto from '../Nuevo-Contacto/NuevoContacto'
const Home = () => {
  return (
    <Container fluid style={{ padding: '5%' }}>
      <Row>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#all-contacts">
          <Row>
            <Col xs={12} md={12} lg={4} style={{ marginTop: '25px' }}>
              <h1 style={{ marginBottom: '25px' }}>Menú</h1>
              <ListGroup>
                <ListGroup.Item action href="#all-contacts">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-check-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;All Contacts
                </ListGroup.Item>
                <ListGroup.Item action href="#my-favorites">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;My Favorites
                </ListGroup.Item>
                <ListGroup.Item action href="#new-contact">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;New Contact
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} md={12} lg={8} style={{ marginTop: '25px' }}>
              <Tab.Content>
                <Tab.Pane eventKey="#all-contacts">
                  <Contactos />
                </Tab.Pane>
                <Tab.Pane eventKey="#my-favorites">
                  <MisFavoritos />
                </Tab.Pane>
                <Tab.Pane eventKey="#new-contact">
                  <NuevoContacto />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </Container>
  )
}

export default Home