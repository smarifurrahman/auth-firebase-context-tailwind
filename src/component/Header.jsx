import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Sign Out Successful');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link to="/" className="btn btn-ghost normal-case text-lg">Home</Link>
                <Link to="/login" className="btn btn-ghost normal-case text-lg">Login</Link>
                <Link to="/register" className="btn btn-ghost normal-case text-lg">Register</Link>
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
                        </> :
                        <Link to="/login">Sign In</Link>

                }
            </div>
        </div>
    );
};

export default Header;