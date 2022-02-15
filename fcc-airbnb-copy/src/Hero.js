import heroPhotoSrc from "./assets/photo-grid.png";
function Hero() {
  return (
    <section className="heroSection">
      <img
        src={heroPhotoSrc}
        className="heroSection__photo"
        alt="decoration photo in hero section - nothing important"
      />
      <h1 className="heroSection__header">Online Experiences</h1>
      <p className="heroSection__info">
        Join unique, interactive activities led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </section>
  );
}
export default Hero;
