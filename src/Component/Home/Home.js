import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  return (
    <>

      <div className="crud bg-light mt-5 py-5 px-4 rounded-5 shadow">
        <div className="w-75 mx-auto text-center">

          <h2 className="heade fw-bold mb-3 text-info" style={{ color: 'indigo' }}>
            🌟 CRUD Operations with React 🌟
          </h2>

          <p className="fs-5 text-secondary">
            😊 Master the art of building dynamic applications with CRUD operations!
          </p>

          <hr className="w-50 mx-auto my-4" />

          <p className="fs-6 text-dark">
            💻 <strong>Explore Modern React Hooks</strong>: Dive deep into <span className="text-primary" >useState</span> and <span className="text-primary">useReducer</span> for efficient state management!
          </p>

          <p className="fs-6 text-dark">
            🧠 <strong>State Simplified</strong>: Learn how to manage complex state logic with <span className="text-primary">useReducer</span>.
          </p>

          <p className="fs-6 text-dark">
            🌐 <strong>Global State Mastery</strong>: Seamlessly handle shared state using <span className="text-primary">useContext</span>!
          </p>

          <button
            className="btn btn-primary mt-4 px-4 py-2 rounded-pill"
            onClick={() => window.location.href = 'https://reactjs.org/'}
          >
            Start Learning Now 🚀
          </button>

        </div>
      </div>


    </>
  );
}