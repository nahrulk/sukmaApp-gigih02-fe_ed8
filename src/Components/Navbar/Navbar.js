import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavDropdown } from 'react-bootstrap';
import { dbLive } from '../../firebase';
import { ref, onValue } from 'firebase/database';
import { useEffect } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);

  const [favs, setFavs] = useState([]);
  let { userFav } = useState([]);

  useEffect(() => {
    onValue(ref(dbLive), (snapshot) => {
      setFavs([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((fav) => {
          setFavs((oldArray) => [...oldArray, fav]);
        });
      }
    });
  }, []);

  userFav = favs.filter((item) => item.userId === currentUser?.uid);

  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-md py-3 navbar-default navbar-custom">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img className="logo-nav" alt="" src={require('../CategoryIcon/Logo.png')} />
              <h2>
                {' '}
                <b> SUKMA. </b>
              </h2>
            </a>

            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link active" href="#">
                      Home
                    </a>
                  </Link>
                </li>

                <NavDropdown title="Catagory" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/Cybercard">
                      <a className="nav-down" href="#">
                        {' '}
                        Cyber Bullying{' '}
                      </a>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/Sexualcard">
                      <a className="nav-down" href="#">
                        {' '}
                        Sexual Bullying{' '}
                      </a>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/Physicalcard">
                      <a className="nav-down" href="#">
                        {' '}
                        Physical Bullying{' '}
                      </a>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/Verbalcard">
                      <a className="nav-down" href="#">
                        {' '}
                        Verbal Bullying{' '}
                      </a>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <li className="nav-item">
                  <Link to="/profile/">
                    <span className="nav-link">Profile ({userFav.length})</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">
                    <span className="nav-link">About Us</span>
                  </Link>
                </li>
              </ul>

              <Link to="/login">
                <div className="handleAuthenticaton" onClick={() => dispatch({ type: 'LOGOUT' })}>
                  {!currentUser ? (
                    <a className="btn btn-primary ms-md-2" role="button" href="#">
                      Login
                    </a>
                  ) : (
                    <a className="btn btn-danger ms-md-2" role="button" href="#">
                      Logout
                    </a>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
