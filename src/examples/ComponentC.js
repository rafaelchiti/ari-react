import React from "react";
import Box from "../Box";

//
// Este ejemplo usa la idea de montar / renderizar un componente
// y en ese primer mount o render hacer un pedido a una API (una sola vez)
// de datos. Pero esos datos queremos guardarlos en el estado interno del componente
// para eso usamos 'state'.
//

//
// Version class
//
class ComponentCClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { datosCuriosos: [] };
  }

  componentDidMount() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((result) => result.json())
      .then((result) => {
        // Esta api devuelve todas las cosas en un objeto y dentro
        // de ese objeto en una prop 'all'
        this.setState({ datosCuriosos: result.all });
      });
  }

  render() {
    return (
      <div>
        <p>
          Soy un component de clase. Cuando me monto llamo a una api de datos
          curiosos sobre gatos. Una vez que la llamada 'asincronica' (osea
          promise) termina, entonces voy a hacer setState() para que mi
          componente se actualice. Una vez que se actualiza deberian ver aqui
          debajo 👇 un dato curioso sobre gatos. Que lo obtenemos de
          `this.state`.
        </p>
        <Box padding="2" backgroundColor="highlight">
          {this.getRandomDatoCurioso()}
        </Box>
      </div>
    );
  }

  getRandomDatoCurioso = () => {
    if (this.state.datosCuriosos.length > 0) {
      const randomNumber = Math.floor(Math.random() * 100);
      return this.state.datosCuriosos[randomNumber].text;
    } else {
      return null;
    }
  };
}

export { ComponentCClass };

//
// Version Functional
//
const ComponentCFunctional = () => {
  const [datosCuriosos, setDatosCuriosos] = React.useState([]);

  React.useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((result) => result.json())
      .then((result) => {
        setDatosCuriosos(result.all);
      });
  }, []);

  const getRandomDatoCurioso = React.useCallback(() => {
    if (datosCuriosos.length > 0) {
      const randomNumber = Math.floor(Math.random() * 100);
      return datosCuriosos[randomNumber].text;
    } else {
      return null;
    }
  }, [datosCuriosos]);

  return (
    <div>
      <p>
        Soy un component funcional. Cuando me renderizo por primera vez llamo a
        una api de datos curiosos sobre gatos. Una vez que la llamada
        'asincronica' (osea promise) termina, entonces voy a hacer setState(),
        que en componentes funcionales es un poquito distinto, en este caso lo
        nombramos `setDatosCuriosos` para que mi componente se actualice. Una
        vez que se actualiza deberian ver aqui debajo 👇 un dato curioso sobre
        gatos. Que lo obtenemos de `this.state`.
      </p>
      <Box padding="2" backgroundColor="highlight">
        {getRandomDatoCurioso()}
      </Box>
    </div>
  );
};

export { ComponentCFunctional };
