import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'

const Layout = ({ children }) => {
  const history = useHistory()

  const renderNavbar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">{process.env.REACT_APP_TITLE}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" activeKey={history?.location?.pathname}>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

  const renderContent = () => (
    <Container className="p-4">
      <Row>
        {children}
      </Row>
    </Container>
  )

  return (
    <>
      {renderNavbar()}
      {renderContent()}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
