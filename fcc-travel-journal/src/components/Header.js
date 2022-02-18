import { MdTravelExplore } from "react-icons/md";
function Header() {
  return (
    <header className="mainHeader">
      <MdTravelExplore className="mainHeader__icon" />
      <h1 className="mainHeader__header">my travel journal</h1>
    </header>
  );
}

export default Header;
