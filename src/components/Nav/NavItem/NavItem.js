import "./NavItem.css";

function NavItem(props) {
  const className = [];
  if (props.active) {
    className.push('active')
  }

  return (
    <li className="NavItem">
      <a href={props.url}
      className={className.join(' ')}>
      {props.children}
      </a>
    </li>
    );
}

export default NavItem;