import "./NavBar.css";

const NavBar = () => {
  const links = ["Link1", "Link2"];
  const link_elements = links.map((item) => (
    <li className="nav-item">
      <a className="nav-link" href="#{item}">
        {item}
      </a>
    </li>
  ));

  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">{link_elements}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
