import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBarre() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = (eventKey) => {
    setExpanded(false);

    // Utiliser scrollIntoView pour naviguer vers la section
    const section = document.querySelector(eventKey);
    if (section) {
      const offset = window.innerWidth <= 991 ? 260 : 0; // Ajuster l'offset en fonction de la largeur de l'écran
      let newPosition = section.offsetTop - offset; // Position par défaut

      // Vérifier si le lien est "ACCUEIL" et ajuster la position en conséquence
      if (eventKey === "#bannerNav" && window.innerWidth <= 991) {
        newPosition += 60; // Décaler vers le bas de 100px uniquement sur mobile
      }

      window.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Décaler la page de 375px au chargement initial sur les appareils mobiles
    if (window.innerWidth <= 991) {
      window.scrollTo({
        top: 50,
        behavior: "smooth",
      });
    }
  }, []); // Exécuter une seule fois après le premier rendu

  return (
    <div
      id="navBarre"
      className="animate__animated animate__bounceInRight col-12 col-lg-9 d-flex justify-content-lg-end"
    >
      <Navbar
        expanded={expanded}
        onToggle={handleToggle}
        expand="lg"
        className="navbar-dark w-100"
      >
        <Container className="justify-content-lg-end">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mb-2 mb-lg-0" onSelect={handleSelect}>
              <Nav.Link className="accueil-link" eventKey="#bannerNav">
                ACCUEIL
              </Nav.Link>
              <Nav.Link eventKey="#presentationNav">PRÉSENTATION</Nav.Link>
              <Nav.Link eventKey="#profilNav">PROFIL</Nav.Link>
              <Nav.Link eventKey="#realisationNav">RÉALISATIONS</Nav.Link>
              <Nav.Link eventKey="#contactNav">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarre;
