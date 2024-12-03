// 2 regole fondamentali per gli HOOKS:

import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

// 1) Gli Hooks possono essere utilizzati SOLO all'interno di componenti a funzione
// 2) Bisogna utilizzare gli Hooks SEMPRE in modo esplicito all'interno del componente, prima del return.
// MAI all'interno di condizioni, cicli, blocchi intermedi.. ecc..
// devono essere dichiarati nel contesto PRINCIPALE della funzione senza vincoli

const EffectsExample = () => {
  // qui dentro possiamo utilizzarli, prima del return

  // state = {
  //   name: "stefano"
  //   counter: 0,
  // }

  // trasformiamo lo stato di una classe in useState

  //   const state = useState("stefano");
  //   console.log(state); // ["stefano", f(){}]

  // come si usa realmente?

  const [name, setName] = useState("stefano"); // stefano è il valore iniziale di name
  //   setName sarà una variabile contenente la funzione SETTER che ci permetterà di cambiare il valore di name nel tempo

  const [counter, setCounter] = useState(0); // 0 è il valore iniziale di counter
  //   setCounter sarà una variabile contenente la funzione SETTER che ci permetterà di cambiare il valore di name nel tempo

  //⚠️ Le funzioni setter operano un cambio di stato SEMPRE ASINCRONO!
  // non possiamo leggere un valore subito dopo l'invocazione di una funzione setter
  // (perché l'operazione asincrona avrà bisogno di tempo per eseguirsi e verosimilmente non sarà ancora finita al momento del console.log())

  // useEffect() a seconda di come lo si utilizzi, imita il comportamento di componentDidMount, componentDidUpdate, componentWillUnmount
  // useEffect chiede una callback function come argomento, che ha un secondo parametro opzionale

  // questo tipo di useEffect possiamo definirlo "senza freni", sia al caricamento del componente (come un didMount),
  // sia dopo un aggiornamento di stato (come un didUpdate)
  // useEffect(() => {
  //   console.log("useEffect");
  // });

  // per creare un comportamento di useEffect che si esegue SOLO al MOUNT (al montaggio), dovremo sfruttare il secondo parametro
  useEffect(() => {
    console.log("useEffect al didMount");
  }, []);

  // useEffect come componentDidUpdate() legato ad un cambio di valore specifico che sia stato o props

  useEffect(() => {
    // essendo che gli effetti scattano COMUNQUE anche al montaggio, se questa cosa non ci piacesse,
    // dovremmo prevenirla con un if che controlli il valore iniziale
    if (name !== "stefano") {
      console.log("useEffect come componentDidUpdate() con dipendenza name");
    }
  }, [name]);

  useEffect(() => {
    if (counter > 0) {
      console.log("useEffect come componentDidUpdate() con dipendenza counter");
    }
  }, [counter]);

  useEffect(() => {
    if (counter > 0 && name !== "stefano") {
      console.log("useEffect come componentDidUpdate() con dipendenza sia di counter che di name");
    }
  }, [counter, name]);

  // useEffect come componentWillUnmount()
  useEffect(() => {
    // il return all'interno dell callback dello useEffect sarà una funzione chiamata poco prima della "morte del componente"
    return () => console.log("bye bye");
  }, []);

  return (
    <div>
      <Container>
        <p>Il valore nello stato è: {name}</p>
        <Button
          variant="primary"
          onClick={() => {
            setName("Elia");
          }}
        >
          Change Name
        </Button>

        <hr />

        <h2 className="mt-5">{counter}</h2>
        <Button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +1
        </Button>
        <hr />
      </Container>
    </div>
  );
};

export default EffectsExample;
