const Header = () => {
  const Item = (props) => {
    return (
      <li>
        <a style={{ textTransform: "capitalize" }} href={props.title}>
          {props.title}
        </a>
      </li>
    );
  };

  return (
    <header>
      <nav>
        <ul>
          <Item title="home" />
          <Item title="produtos" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
