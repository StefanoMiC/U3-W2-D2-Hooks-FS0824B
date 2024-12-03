// 2 regole fondamentali per gli HOOKS:

import { useState } from "react";
import { Container, Button, ListGroup } from "react-bootstrap";

// 1) Gli Hooks possono essere utilizzati SOLO all'interno di componenti a funzione
// 2) Bisogna utilizzare gli Hooks SEMPRE in modo esplicito all'interno del componente, prima del return.
// MAI all'interno di condizioni, cicli, blocchi intermedi.. ecc..
// devono essere dichiarati nel contesto PRINCIPALE della funzione senza vincoli

const StateExample = () => {
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

  const [comments, setComments] = useState([]);

  //⚠️ Le funzioni setter operano un cambio di stato SEMPRE ASINCRONO!
  // non possiamo leggere un valore subito dopo l'invocazione di una funzione setter
  // (perché l'operazione asincrona avrà bisogno di tempo per eseguirsi e verosimilmente non sarà ancora finita al momento del console.log())

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

        <h4>Lista</h4>
        <Button
          onClick={() => {
            setComments([...comments, { text: "Best restaurant in town!" }]);
          }}
        >
          Aggiungi nuovo elemento
        </Button>
        <ListGroup>
          {comments.map((comment, index) => (
            <ListGroup.Item key={index}>{comment.text}</ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default StateExample;
