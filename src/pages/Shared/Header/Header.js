import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
    navigate("/home");
  };

  return (
    <header className="header-area">
      <Navbar expand="lg" className="main-menu">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link to="/home">Home</Link>
              <Link to="/inventory">Manage Inventories</Link>

              {user && (
                <>
                  <Link to="/additems">Add items</Link>
                  <Link to="/myitems">My items</Link>
                </>
              )}
              <Link to="/blog">blog</Link>
              {user ? (
                <button
                  onClick={handleLogOut}
                  type="button"
                  className="btn btn-link text-decoration-none text-white"
                >
                  log out
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
