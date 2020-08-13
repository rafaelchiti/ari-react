import React from "react";
import Box from "../Box";

//
// Este ejemplo usa la idea de pedir cosas a la api cuando haces click en un
// boton (en lugar de hacer cuando lo montas o renderizas por primera vez)
//

//
// Version class
//
class ComponentDClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { datosCuriosos: [] };
  }

  componentDidMount() {
    // En este caso decidimos no hacer nada 'on mount'
    // podrias evitar escribir el metodo enteramente.
  }

  render() {
    return (
      <div>
        <p>
          En este caso al montarme no hago nada 🤷‍♂️. Perooo cuando aprietas el
          boton en ese momento hago una llamada asincronica/promises a una API y
          cuando el resultado esta de regreso en ese momento hago setState para
          que react re-renderice el componente y muestre los nuevos valores.
          Aprieta el boton aqui abajo 👇 y prueba:
        </p>
        {/* 
          Detalle no menor, fijate que onClick={} recibe una 'funcion' 
          Pero no estamos llamandola, llamarla seria this.fetchRandomFacts().
          No la llamamos nosotros por que en verdad lo que queremos es decirle a
          'button' mira, te doy este pedazo de logica (funcion), que yo quiero que
          vos llames cuando alguien te hace 'onClick'. Pero solo cuando alguien hace
          eso. Por ende necesitamos que button se encarge de gestionar cuando hacer
          la llamada
        */}
        <button onClick={this.fetchRandomFacts}>
          Fetch random fact about cats
        </button>
        <Box marginTop="2" padding="2" backgroundColor="highlight">
          {this.getRandomDatoCurioso()}
        </Box>
      </div>
    );
  }

  // Te preguntaras por que mierda esta funcion en el cuerpo de una 'clase' esta
  // escrita asi `miFuncion = () => {}`. Buena pregunta, hay varias formas de escribir
  // una funcion en el cuerpo de una clase. Chequea el archivo 'ClasesTheory.js'
  // para ver mas comentarios y explicacion.
  fetchRandomFacts = () => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((result) => result.json())
      .then((result) => {
        // Esta api devuelve todas las cosas en un objeto y dentro
        // de ese objeto en una prop 'all'
        this.setState({ datosCuriosos: result.all });
      });
  };

  getRandomDatoCurioso = () => {
    if (this.state.datosCuriosos.length > 0) {
      const randomNumber = Math.floor(Math.random() * 100);
      return this.state.datosCuriosos[randomNumber].text;
    } else {
      return null;
    }
  };
}

export { ComponentDClass };

//
//
// Version Functional
//
//

const ComponentDFunctional = () => {
  const [datosCuriosos, setDatosCuriosos] = React.useState([]);

  const getRandomDatoCurioso = React.useCallback(() => {
    if (datosCuriosos.length > 0) {
      const randomNumber = Math.floor(Math.random() * 100);
      return datosCuriosos[randomNumber].text;
    } else {
      return null;
    }
  }, [datosCuriosos]);

  const onClick = React.useCallback(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((result) => result.json())
      .then((result) => {
        // Esta api devuelve todas las cosas en un objeto y dentro
        // de ese objeto en una prop 'all'
        setDatosCuriosos(result.all);
      });
  }, [setDatosCuriosos]);

  return (
    <div>
      <p>
        En este caso al montarme (o renderizarme por primera vez) no hago nada
        🤷‍♂️. Perooo cuando aprietas el boton en ese momento hago una llamada
        asincronica/promises a una API y cuando el resultado esta de regreso en
        ese momento hago setState (setDatosCuriosos) para que react re-renderice
        el componente y muestre los nuevos valores. Aprieta el boton aqui abajo
        👇 y prueba:
      </p>
      <button onClick={onClick}>Fetch random fact about cats</button>
      <Box marginTop="2" padding="2" backgroundColor="highlight">
        {getRandomDatoCurioso()}
      </Box>
    </div>
  );
};

export { ComponentDFunctional };
