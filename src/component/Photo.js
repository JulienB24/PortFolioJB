import profil from "./image/logoJB3.png";

function Photo() {
  return (
    <div className="col-lg-3 col-12 mt-4 text-center align-content-center">
      <img
        className="rounded-5"
        id="photo"
        src={profil}
        alt="photoProfil"
      ></img>
    </div>
  );
}

export default Photo;
