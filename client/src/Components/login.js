import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mail = 'admin@acropolis.in';
const pass = '12345678';


const Login = () => {
  const navigate = useNavigate();

  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  let flag = 0;

  const handleValidation = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (flag === 2) {
      if (Email === mail && Password === pass) {
        navigate('/home');
      }
    }
  };

  const validate = () => {
    const error = {};

    if (!Email) {
      error.Email = 'Email is Required';
    } else if (Email !== mail) {
      error.Email = 'Invalid email';
    } else {
      error.Email = '';
      flag++;
    }

    if (!Password) {
      error.Password = 'Password is Required';
    } else if (Password !== pass) {
      error.Password = 'Invalid Password';
    } else {
      error.Password = '';
      flag++;
    }

    return error;
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleValidation}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@acropolis.in"
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                    required=""
                  />
                  {errors.Email && <div className="text-red-500 text-sm font-medium">{errors.Email}</div>}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                    required=""
                  />
                  {errors.Password && <div className="text-red-500 text-sm font-medium">{errors.Password}</div>}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 border px-4 py-1 rounded-lg dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{' '}
                  <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
