import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n6kplxm",
        "template_byhskfr",
        form.current,
        "2A2d8ppKxXrsOBHk0"
      )
      .then(
        (result) => {
          console.log("SUCCÈS !", result.text);
          Swal.fire({
            title: "Message envoyé avec succès !",
            icon: "success",
          });
          resetForm();
        },
        (error) => {
          console.log("ÉCHEC...", error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Une erreur c'est produite!",
          });
        }
      );
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <div
      id="contact"
      className=" border rounded mx-xl-5 mx-2 align-content-center"
    >
      <h2 className="text-center">CONTACT</h2>
      <div className="container-fluid">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="form-group col-10 offset-1 col-sm-6 offset-sm-3 mb-3 ">
              <p className="float-star d-flex d-inline">
                <i className="fa-solid fa-user me-2 align-content-center"></i>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Nom et Prénom"
                  name="from_name"
                  required
                />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-10 offset-1 col-sm-6 offset-sm-3 mb-3">
              <p className="float-star d-flex d-inline">
                <i className="fa-solid fa-phone  me-2 align-content-center"></i>

                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Téléphone"
                  required
                />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-10 offset-1 col-sm-6 offset-sm-3 mb-3">
              <p className="float-star d-flex d-inline">
                <i className="fa-solid fa-at me-2 align-content-center"></i>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Adresse mail"
                  required
                />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-10 offset-1 col-sm-6 offset-sm-3 mb-3">
              <p className="float-star d-flex d-inline">
                <i className="fa-solid fa-envelope-open-text me-2 align-content-center"></i>
                <input
                  type="text"
                  name="object"
                  className="form-control"
                  placeholder="Objet du mail"
                  required
                />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-10 offset-1 col-sm-6 offset-sm-3 mb-3">
              <p className="float-star d-flex d-inline">
                <i className="fa-solid fa-comment me-2 align-content-start"></i>

                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  name="message"
                  placeholder="Votre message"
                  required
                ></textarea>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="button">
              <button className="btn btn-success me-2" type="submit">
                Envoyer
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={resetForm}
              >
                Annuler
              </button>
            </div>
          </div>
        </form>
        <div id="button" className="text-center">
          <a
            href="https://www.linkedin.com/in/julien-breuil-dev/"
            target="blank"
          >
            <i id="linkedin" className="fa-brands fa-linkedin"></i>
            {"Julien Breuil |"}
          </a>
          <a href="https://github.com/JulienB24/" target="blank">
            <i id="github" className="fa-brands fa-square-github"></i>
            {"JB24"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
