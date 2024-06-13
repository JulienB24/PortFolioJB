import ACDC from "./image/ACDC.PNG";
import justePrix from "./image/justePrix.PNG";
import pendu from "./image/pendu.PNG";
import afpa from "./image/AFPA.PNG";
import master from "./image/masterMind.PNG";
import yuka from "./image/Myyuka.PNG";
import html from "./image/html.png";
import css from "./image/css.png";
import boot from "./image/boot.png";
import js from "./image/js.png";
import react from "./image/react.png";

function Realisation() {
  return (
    <div
      id="realisation"
      data-aos="zoom-in"
      className=" border rounded mt-lg-5 mb-xl-3 mx-xl-5 mx-2 text-center align-content-center h-125 mb-5 "
    >
      <h2 className="text-center ">RÉALISATIONS</h2>
      <section className="card-group " id="realisations">
        <div className="container ">
          <div className="row ">
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="col-lg-4 "
            >
              <div className="card ">
                <img className="card-img-top " src={afpa} alt="Afpa" />
                <div className="hovered">
                  <span>
                    <p className="text-decoration-underline fs-4">AFPA</p>
                    <br></br>{" "}
                    <ul>
                      {" "}
                      <li>
                        {"HTML"}
                        <img src={html} alt="html5" />
                      </li>{" "}
                      <li>
                        {"CSS"}
                        <img src={css} alt="CSS3" />
                      </li>{" "}
                    </ul>
                  </span>
                </div>
              </div>
              <a href="https://julienb24.github.io/AFPA/" target="blank">
                <button className="btn mb-3">Visiter</button>
              </a>
            </div>

            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className="col-lg-4"
            >
              <div className="card ">
                <img className="card-img-top" src={ACDC} alt="ACDC" />
                <div className="hovered">
                  <span>
                    <p className="text-decoration-underline fs-4">ACDC</p>
                    <br></br>{" "}
                    <ul>
                      <li>
                        {"HTML"}
                        <img src={html} alt="html5" />
                      </li>{" "}
                      <li>
                        {"CSS"}
                        <img src={css} alt="CSS3" />
                      </li>{" "}
                      <li>
                        {"Bootstrap"}
                        <img className="mt-2" src={boot} alt="bootstrap" />
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <a href="https://julienb24.github.io/ACDC/" target="blank">
                <button className="btn mb-3">Visiter</button>
              </a>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className="col-lg-4 "
            >
              <div className="card ">
                <img className="card-img-top" src={justePrix} alt="jutePrix" />
                <div className="hovered">
                  <span>
                    <p className="text-decoration-underline fs-4">
                      Le juste prix
                    </p>
                    <br></br>{" "}
                    <ul>
                      <li>
                        {"HTML"}
                        <img src={html} alt="html5" />
                      </li>{" "}
                      <li>
                        {"CSS"}
                        <img src={css} alt="CSS3" />
                      </li>{" "}
                      <li>
                        {"Bootstrap"}
                        <img className="mt-2" src={boot} alt="bootstrap" />
                      </li>
                      <li>
                        {"JavaScript"}
                        <img className="mt-2" src={js} alt="JS" />
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <a href="https://julienb24.github.io/justePrix/" target="blank">
                <button className="btn mb-3">Visiter</button>
              </a>
            </div>
          </div>
          <div className="row">
            <div
              data-aos="flip-right"
              data-aos-duration="2000"
              className="col-lg-4"
            >
              <div className="card ">
                <img className="card-img-top " src={pendu} alt="pendu" />
                <div className="hovered">
                  <span>
                    <p className="text-decoration-underline fs-4">Le pendu</p>
                    <br></br>{" "}
                    <ul>
                      <li>
                        {"HTML"}
                        <img src={html} alt="html5" />
                      </li>{" "}
                      <li>
                        {"CSS"}
                        <img src={css} alt="CSS3" />
                      </li>{" "}
                      <li>
                        {"Bootstrap"}
                        <img className="mt-2" src={boot} alt="bootstrap" />
                      </li>
                      <li>
                        {"JavaScript"}
                        <img className="mt-2" src={js} alt="JS" />
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <a href="https://julienb24.github.io/pendu/" target="blank">
                <button className="btn mb-3">Visiter</button>
              </a>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="2000"
              className="col-lg-4"
            >
              <div className="card ">
                {" "}
                <img className="card-img-top" src={master} alt="MasterMind" />
                <div className="hovered">
                  <span>
                    <p className="text-decoration-underline fs-4">MasterMind</p>
                    <br></br>{" "}
                    <ul>
                      <li>
                        {"HTML"}
                        <img src={html} alt="html5" />
                      </li>{" "}
                      <li>
                        {"CSS"}
                        <img src={css} alt="CSS3" />
                      </li>{" "}
                      <li>
                        {"Bootstrap"}
                        <img className="mt-2" src={boot} alt="bootstrap" />
                      </li>
                      <li>
                        {"JavaScript"}
                        <img className="mt-2" src={js} alt="JS" />
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <a href="https://julienb24.github.io/masterMind/" target="blank">
                <button className="btn mb-3">Visiter</button>
              </a>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="2000"
              className="col-lg-4"
            >
              <div className="card">
                <img className="card-img-top" src={yuka} alt="Myyuka" />
                <div className="hovered">
                  <span>
                    <p className="text-decoration-underline fs-4">My Yuka</p>
                    <br></br>{" "}
                    <ul>
                      <li>
                        {"HTML"}
                        <img src={html} alt="html5" />
                      </li>{" "}
                      <li>
                        {"CSS"}
                        <img src={css} alt="CSS3" />
                      </li>{" "}
                      <li>
                        {"Bootstrap"}
                        <img className="mt-2" src={boot} alt="bootstrap" />
                      </li>
                      <li>
                        {"JavaScript"}
                        <img className="mt-2" src={js} alt="JS" />
                      </li>
                      <li>
                        {"React"}
                        <img className="mt-2" src={react} alt="react" />
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <a href="https://julienb24.github.io/Myyuka/" target="blank">
                <button className="btn mb-3">Visiter</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Realisation;
