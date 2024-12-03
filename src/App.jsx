import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EffectsExample from "./components/EffectsExampe";
import { useState } from "react";
import { Button } from "react-bootstrap";
// import StateExample from "./components/StateExample";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {/* <StateExample /> */}
      {toggle && <EffectsExample />}

      <Button variant="info" className="d-block mx-auto" onClick={() => setToggle(!toggle)}>
        {toggle ? "Smonta" : "Monta"} Componente
      </Button>
    </>
  );
}

export default App;
