import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "./vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = /* html */ `
  <div>
    <h1>Desplegar projecto JS Vanilla con Vite</h1>
    <p>Este es un proyecto de ejemplo para aprender a usar Vite con JavaScript Vanilla.</p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
