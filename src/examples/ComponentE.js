import React from "react";
import Box from "../Box";

//
// Jugando con props
// Voy a tener un componente que voy a renderizar dentro de esta demo y
// le voy a pasar props, lo vamos a llamar NiceComponent y va a recibir
// un par de parametros (props), para probar como funcionan las props
//

//
// Version class
//

class ComponentEClass extends React.Component {
  render() {
    return (
      <div>
        A continuacion voy a llamar a nuestro NiceComponent. Dos veces (puedo)
        usarlo las veces que quiera, ya que es generico, nosotros hicimos una
        clase que define su comportamiento pero luego puedo consumirlo (usarlo /
        llamarlo) las veces que quiera con argumentos (props) distintas.
        {/* 
          Fijate que aca llamamos a nuestro componente NiceComponentComponent
          y le pasamos una prop 'labelText'. Es el equivalente de llamar una funcion
          y pasarle un argumento. En este caso es un argumento de 'text' que elegimos
          pasarle, por eso lo encerammos en "", pero si quisieramos podriamos pasar una
          prop que sea un objeto unaProp={ {} }. Fijate que en react html (jsx) para
          pasar props que no son de tipo 'text' tenes que siempre abrir {} y luego adentro
          ya podes pasarle lo que quieras, si es un objeto ={ { name: "rafa"} }, si queres
          pasar una variable (que tenga lo que sea dentro) prop={miVariable}. Si queres
          pasarle una funcion declara in situ prop={ () => {} }. Etc etc.
          Esta prop que pasamos la va a recibir NiceComponentClass component. Y NiceComponentClass
          va a saber que hacer con ella por que en la definicion de su clase le dijimos que
          hacer!
        */}
        <NiceComponentClass
          labelText="hello there"
          accion1={() => console.log("accion 1")}
          accion2={this.accion2}
          numero={1}
        />
        <Box marginTop="2" />
        {/* 
          Fijate que lo volvemos a usar!
        */}
        <NiceComponentClass
          labelText="Hello pero en mi uso por segunda vez"
          accion1={() => console.log("accion 1 desde el uso por segunda vez")}
          accion2={this.accion2}
          numero={1}
        />
      </div>
    );
  }

  accion2 = () => {
    console.log("accion 2. Siempre igual");
  };
}

class NiceComponentClass extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "inline-block",
          border: "2px solid",
          borderColor: "#ff6e6e",
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        Hola! soy NiceComponent.
        <p>
          Uso la prop labelText para mostrar aqui:{" "}
          <Box is="span" backgroundColor="#ffb3a4" display="inline-block">
            {this.props.labelText}
          </Box>
        </p>
        <p>
          Aqui pongo un boton que configuramos para que use la prop 'accion1'.
          Asi cuando haces click ejecuta lo que sea que nuestro padre nos paso
          por prop con nombre 'accion1'. (pero mas vale que lo que nos pasaron
          sea una funcion por que sino va a fallar) &nbsp;
          <button onClick={this.props.accion1}>Click me</button>
        </p>
        <p>
          Aqui lo mismo pero usando props.accion2 &nbsp;
          <button onClick={this.props.accion2}>Accion 2</button>
        </p>
        <p>
          Y aca el numero: &nbsp;
          <Box is="span" backgroundColor="#ffb3a4" display="inline-block">
            {this.props.numero}
          </Box>
        </p>
      </div>
    );
  }
}

export { ComponentEClass };

//
// Version Functional
//
const ComponentEFunctional = () => {
  const accion2 = React.useCallback(() => {
    console.log("accion 2. Siempre igual");
  }, []);

  return (
    <div>
      <NiceComponentComponent
        labelText="hello there"
        accion1={() => console.log("accion 1")}
        accion2={accion2}
        numero={1}
      />
      <Box marginTop="2" />
      <NiceComponentComponent
        labelText="Hello pero en mi uso por segunda vez"
        accion1={() => console.log("accion 1 desde el uso por segunda vez")}
        accion2={accion2}
        numero={1}
      />
    </div>
  );
};

const NiceComponentComponent = (props) => {
  return (
    <div
      style={{
        display: "inline-block",
        border: "2px solid",
        borderColor: "#ff6e6e",
        padding: "10px",
        borderRadius: "4px",
      }}
    >
      Hola! soy NiceComponent.
      <p>
        Uso la prop labelText para mostrar aqui:{" "}
        <Box is="span" backgroundColor="#ffb3a4" display="inline-block">
          {props.labelText}
        </Box>
      </p>
      <p>
        Aqui pongo un boton que configuramos para que use la prop 'accion1'. Asi
        cuando haces click ejecuta lo que sea que nuestro padre nos paso por
        prop con nombre 'accion1'. (pero mas vale que lo que nos pasaron sea una
        funcion por que sino va a fallar) &nbsp;
        <button onClick={props.accion1}>Click me</button>
      </p>
      <p>
        Aqui lo mismo pero usando props.accion2 &nbsp;
        <button onClick={props.accion2}>Accion 2</button>
      </p>
      <p>
        Y aca el numero: &nbsp;
        <Box is="span" backgroundColor="#ffb3a4" display="inline-block">
          {props.numero}
        </Box>
      </p>
    </div>
  );
};

export { ComponentEFunctional };
