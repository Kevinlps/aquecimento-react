import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root") as HTMLElement;
const appRoot = ReactDOM.createRoot(root);

const myDiv = (
  <>
    <div>
      <h1>oi</h1>
      <p>Tudo Bem?</p>
    </div>
    <div>
      <h1>ola</h1>
      <p>Tudo</p>
    </div>
  </>
);

appRoot.render(myDiv);
