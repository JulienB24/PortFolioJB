import CVJB from "./image/CVJB.jpg";
import CVJBPDF from "./image/CVJB.pdf";
import html from "./image/html.png";
import css from "./image/css.png";
import boot from "./image/boot.png";
import js from "./image/js.png";
import react from "./image/react.png";

function CV() {
  return (
    <div
      id="profil"
      data-aos="zoom-in"
      className="border rounded mt-xl-2 mb-xl-3 mx-xl-5 mx-2 text-center align-content-center pb-5 mb-5 "
    >
      <h2>PROFIL</h2>

      <div className="row justify-content-center mx-0">
        <div
          id="boxCV"
          data-aos="flip-up"
          data-aos-duration="1000"
          className="border col-lg-3 col-11 py-4 mx-xl-4 text-center align-content-center "
        >
          <h2>CV</h2>{" "}
          <a href={CVJB} target="blank">
            <img id="cv" src={CVJB} alt="CV"></img>
          </a>
          <a href={CVJBPDF} download="Julien Breuil.pdf">
            <br></br>
            <button type="button" className="btn text-center mt-2">
              Télécharger
            </button>
          </a>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          id="boxCompetences"
          className="border col-lg-3 col-11 py-4 mx-2 mx-xl-4 text-center align-content-center"
        >
          <h2 className="mb-5">Compétences</h2>

          <ul id="competences">
            <li className="mb-4">
              HTML5
              <img src={html} alt="html5" />
            </li>
            <li className="mb-4">
              CSS3
              <img src={css} alt="CSS3" />
            </li>
            <li className="mb-4">
              Bootstrap <img src={boot} alt="bootstrap" />
            </li>
            <li className="mb-4">
              JavaScript
              <img src={js} alt="js" />
            </li>
            <li className="mb-4">
              React
              <img src={react} alt="react" />
            </li>
          </ul>
        </div>
        <div
          id="boxSoftSkills"
          data-aos="flip-up"
          data-aos-duration="2000"
          className="border col-lg-3 col-11 py-4 px-0 mx-xl-4 text-center"
        >
          <h2 className="mb-5">Soft-skills</h2>
          <ul className="p-2">
            <li className="my-4 px-0">
              {" "}
              Adaptabilité&nbsp;<i className="fa-solid fa-wrench"></i>{" "}
            </li>
            <li className="my-4">
              Communication&nbsp;<i className="fa-solid fa-comment"></i>
            </li>
            <li className="my-4">
              Travail d'équipe&nbsp;<i className="fa-solid fa-people-group"></i>
            </li>
            <li className="my-4 mx-0">
              Résolution de problèmes&nbsp;<i className="fa-solid fa-brain"></i>
            </li>
            <li className="my-4">
              Créativité&nbsp;<i className="fa-solid fa-palette"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CV;
