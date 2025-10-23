import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContex } from '../Provider/auThProvider';

const RegisterPage = () => {
    const { createUser, setUser } = useContext(AuthContex);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.purl.value;

        createUser(email, password)
            .then(res => {
                const x = res.user
                setUser(x)
                // console.log(x);
            })
            .catch(error => {
                console.error(error.code, error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-5xl">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form className="card-body" onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name="name" type="text" className="input" placeholder="Name" />

                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" required />

                            <label className="label">Photo URL</label>
                            <input name="purl" type="text" className="input" placeholder="Photo URL" />

                            <button className="btn btn-neutral mt-4" type="submit">Register</button>
                            <p className="font-bold text-center">
                                <Link to="/auth/login" className="text-secondary">Login Now</Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
