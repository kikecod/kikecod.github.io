import React from 'react';

const Creditos = () => {
  return (
    <div>
      <h1>Creditos</h1>
      <h5>
        <p>Created by Enrique Rafael Fernandez Chiri</p>
        <p>C.I.: 10900348</p>
      </h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default Creditos;
