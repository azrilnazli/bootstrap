import React from 'react';
import { Navigate } from 'react-router-dom';
import apiClient from '../../services/api';

const Login = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [toHome, setToHome] = React.useState(false);
    const [authError, setAuthError] = React.useState(false);
    const [unknownError, setUnknownError] = React.useState(false);

    const login = () => {
        setLoggedIn(true);
        sessionStorage.setItem('loggedIn', true);
      };

    const [loggedIn, setLoggedIn] = React.useState(
    sessionStorage.getItem('loggedIn') == 'true' || false
    );
    
    
    const handleSubmit = (e) => {
        e.preventDefault(); // form control

        apiClient.get('/sanctum/csrf-cookie')
        .then(response => {
            apiClient.post('/login', {
                email: email,
                password: password
            }).then(response => {
               // console.log(response)
                if (response.status === 204) {
                    login();
                    setToHome(true);
                }
            })
        });
    }

    if (toHome === true) {
        return <Navigate to='/books' />
    }

   return ( 
    <div>
        <main className="mt-3 py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">

                            <div className="card-header">
                                <h2>Login</h2>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={handleSubmit}>
                                    <div className='row mb-0 p-2'>
                                        <input
                                            className='form-control'
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='row mb-3 p-2'>
                                        <input
                                            className='form-control'
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button className='btn btn-primary float-right' type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>    
                </div>    
            </div>
        </main>        
    </div>
    );
}
 
export default Login;