import photo from "./image/logoJB3.png";

function Header() {
  return (
    <div className="flex-container text-center animate__animated animate__bounceInLeft col-12 ">
      <a href="#bannerNav">
        <h1 className="fs-5">
          <img
            className="rounded-1 animate__animated  animate__rotateInDownLeft"
            id="logo"
            src={photo}
            alt="logoJB"
          ></img>{" "}
          BREUIL Julien
        </h1>
      </a>
    </div>
  );
}
export default Header;
