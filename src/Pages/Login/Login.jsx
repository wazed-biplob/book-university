import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const from = location.state?.from?.pathname || "/";
  const { signIn, signInWithGoogle, signInWithFacebook } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  const handleSignInWithFacebook = () => {
    signInWithFacebook()
      .then((res) => res.user)
      .catch((e) => console.log(e));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((r) => {
        navigate(from);
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <>
      <div className="mx-auto mt-4 w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleLogin}
          novalidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
            <div className="flex justify-end text-xs text-gray-400">
              <Link>Forgot Password?</Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClickCapture={handleLogInWithGoogle}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button
            onClick={handleSignInWithFacebook}
            aria-label="Log in with Facebook"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6 fill-current"
            >
              <path
                d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm2.063 12.219h1.953v-3.5c0-2.391 1.213-3.781 3.771-3.781 1.094 0 2.062.078 2.344 0.109v2.156h-1.609c-1.266 0-1.516.6-1.516 1.484v1.875h3.031l-.391 2.969h-2.641v7.625h-3.187v-7.594H9.437v-2.969h2.438v-2.25c0-2.406 1.369-3.719 3.75-3.719zm0 0"
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Don't have an account?
          <Link to="/registration" className="ms-4 underline text-gray-100">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};
export default Login;
