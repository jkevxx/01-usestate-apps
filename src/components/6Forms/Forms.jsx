import React, { useState } from "react";

const data = {
  name: "",
  lastName: "",
  username: "",
  password: "",
};

const Forms = () => {
  const [values, setValues] = useState(data);

  const handleChangeInput = (e) => {
    // console.log(e.target.value);
    console.log(e.target);
    const { name, value } = e.target;
    setValues({
      ...values,
      // [e.target.name]: e.target.value,
      [name]: value,
    });
  };

  const handleChecked = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={values.name}
          onChange={handleChangeInput}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          defaultValue={values.lastName}
          onChange={handleChangeInput}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          defaultValue={values.username}
          onChange={handleChangeInput}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          defaultValue={values.password}
          onChange={handleChangeInput}
        />

        <p>Elige tu Sabor JS Favorito:</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChangeInput}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>

        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChangeInput}
        />
        <label htmlFor="react">React</label>

        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChangeInput}
        />
        <label htmlFor="angular">Angular</label>

        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Forms;
