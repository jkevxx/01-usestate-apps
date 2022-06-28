import React, { useState } from "react";

function ConditionalApp() {
  const [condition, setCondition] = useState(false);

  return (
    <div>
      <h1>Conditional App</h1>
      <h3>State value is {condition.toString()}</h3>

      <button onClick={() => setCondition(!condition)}>Toggle</button>

      {condition ? <h4>Show Message</h4> : <></>}
      {/* another form to show conditional is using && */}
      {condition && <h4>Show Message with &&</h4>}
    </div>
  );
}

export default ConditionalApp;
