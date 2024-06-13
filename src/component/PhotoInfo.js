import Photo from "./Photo";
import Presentation from "./Presentation";

function Banner() {
  return (
    <div
      data-aos="zoom-in"
      id="photoInfo"
      className="border rounded row pb-lg-5 mx-xl-5 mx-2 px-2 align-content-center "
    >
      <Photo />
      <Presentation />
    </div>
  );
}

export default Banner;
