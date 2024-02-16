import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header>
    <Link id='logo' to='/'>Ollie Notes</Link>
    <nav>
      <ul>
        <li><NavLink to="/about">About</NavLink></li>
        {
          currentUser
            ? <>
              <li><NavLink to={`/users/${currentUser.uid}/notes`}>Notes</NavLink></li>
              <li><NavLink to={`/users/${currentUser.uid}`}>Account</NavLink></li>
            </>
            : <li><NavLink to='/sign-in'>Sign In</NavLink></li>
        }
      </ul>
    </nav>
  </header>;
}