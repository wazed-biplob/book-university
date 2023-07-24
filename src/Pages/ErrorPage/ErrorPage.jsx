import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#f8f8f8",
        padding: "20px",
      }}
    >
      <h1>Oops! 404 Error</h1>
      <p>It looks like the page you're looking for doesn't exist.</p>
      <p>Please check the URL or go back to the previous page.</p>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
