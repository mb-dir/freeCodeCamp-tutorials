import logoSrc from "./assets/airbnb-logo.png";
function Header() {
  return (
    <header className="header">
      <img src={logoSrc} className="header__logo" alt="airbnb logo" />
    </header>
  );
}
export default Header;
