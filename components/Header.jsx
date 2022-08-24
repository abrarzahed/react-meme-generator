export default function Header() {
  return (
    <header>
      <div className="header--left">
        <img src="../images/troll-face.png" alt="" className="logo" />
        <span className="app-name">Meme Generator</span>
      </div>
      <div className="header--right">
        <a href="#" className="header-link">
          Blank Button
        </a>
      </div>
    </header>
  );
}
