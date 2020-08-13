import React from "react";

//
// Version class
//

class ComponentBClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Me llaman cuando se inicializa el componente");
    this.state = { miNombre: "Rafa" };
  }

  render() {
    return (
      <div>
        Hola, yo tengo un constructor y estado inicial: miNombre:{" "}
        {this.state.miNombre}
      </div>
    );
  }
}

export { ComponentBClass };

//
// Version functional
//
const ComponentBFunctional = () => {
  const [miNombre, setMiNombre] = React.useState("Rafa");

  return (
    <div>Hola soy funcional! y mi estado inicial es: miNombre: {miNombre}</div>
  );
};

export { ComponentBFunctional };
