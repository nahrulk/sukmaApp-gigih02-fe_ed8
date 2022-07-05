import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../firebase';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useContext(AuthContext);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: 'LOGIN', payload: user });
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Register
        const user = userCredential.user;
        dispatch({ type: 'LOGIN', payload: user });
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <section className="py-4 py-xl-5">
              <div className="container">
                <div className=" border rounded border-0 border-dark overflow-hidden">
                  <div className="row g-0">
                    <div className="col">
                      <div className="text-white p-4 p-md-5">
                        <h2 className="headtextt fw-bold text-white mb-3">It's Cool to Be Kind</h2>
                        <p className="bodytext mb-4">
                          Bersama-sama mari kita lawan Bullying! <br /> Ayo kita berteman asik tanpa
                          mengusik!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-6">
            <section className="position-relative py-4 py-xl-5">
              <div className="card mb-5">
                <div className="cardbody d-flex flex-column align-items-center">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-person">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                    </svg>
                  </div>
                  <form className="text-center" method="post">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary d-block w-100"
                        type="submit"
                        onClick={signIn}>
                        Login
                      </button>
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-info d-block w-100"
                        type="submit"
                        onClick={register}>
                        Register
                      </button>
                    </div>
                    <p className="text-muted">Forgot your password?</p>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
