const NavBar = () => {
  let links = ["Link1", "Link2"];
  let link_elements = links.map((item) => (
    <li className="nav-item">
      <a className="nav-link" href="#{item}">
        {item}
      </a>
    </li>
  ));

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">{link_elements}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
