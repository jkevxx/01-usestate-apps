import React, { useState } from "react";

const SimpleForm = () => {
  const [data, setData] = useState("");
  const [info, setInfo] = useState("");

  const handleInput = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(data);
    console.log(data);
    setData("");
  };

  // const handleClearInput = () => {
  //   setData("");
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={data || ""} />
        <button type="submit">Send</button>
      </form>

      {/* <div>
        <input type="text" onChange={handleInput} value={data} />
        <button onClick={handleClearInput}>Send</button>
      </div> */}
    </>
  );
};

export default SimpleForm;
