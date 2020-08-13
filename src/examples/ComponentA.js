import React from "react";


//
// Version class
//
class ComponentAClass extends React.Component {
  componentDidMount() {
    console.log("Cuando me monto muestro este log.");
  }

  render() {
    return <div>Soy un component de clase</div>;
  }
}

export { ComponentAClass };

//
// Version functional
//
const ComponentAFunctional = () => {
  return <div>Hola soy funcional!</div>;
};

export { ComponentAFunctional };
