import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__h1">
        <Link to="/">Maanila</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <Link to="/">Nav1</Link>
          </li>
          <li className="header__li">
            <Link to="/">Nav2</Link>
          </li>
          <li className="header__li">
            <Link to="/">Nav3</Link>
          </li>
          <li className="header__li">
            <Link to="/">Nav4</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
