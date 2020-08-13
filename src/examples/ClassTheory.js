import React from "react";
// Clases son un poco molestas, por que tienen varias formas de hacer cosas.

// Lo primero es declarar la clase.
class MiClaseA {}

// Una clase puede extender de otra clase, es lo que hacemos con React
// Components que son de tipo clases.
class MiClaseComponentReact extends React.Component {}

// En ambos casos una clase tiene un 'cuerpo' que es lo que uno escribe entre las {}

// Las clases pueden tener funciones/metodos. Es como un objeto en la practica.
// En un objeto podemos hacer:
const miObjeto = {
  nombre: "rafa",
  sayHello: () => console.log("Hello!"),
  sayHello2: function () {
    console.log("Hello 2");
  },
};
// En este caso el objeto tiene dos propiedades una 'nombre' y una 'sayHello'. Cada
// una guarda cosas distintas. nombre guarda una cadena de texto (string).
// 'sayHello' en cambio guarda una funcion (declarada como arrow function)
// 'sayHello2' es igual que 'sayHello' pero declara la funcion usando otra sintaxis
// (misma merda, en la practica) distinta forma de hacerlo.
// Entonces ahora podria hacer cosas como:
console.log(miObjeto.nombre); // que va a imprimir 'rafa'
miObjeto.sayHello(); // va a imprimir 'Hello!'
miObjeto.sayHello2(); // va a imprimir 'Hello 2'

// -----------------------------------------
// .... ahora volviendo a clases. El concepto es similar al de objetos, se compartan
// parecido. Yo puedo hacer una clase que tenga lo mismo (escrito de forma distinta)
// Algunas dif iniciales, arranca con 'class', luego no hay '=' sino que arranco a
// definirla.
// Por otro lado a diferencia miObjeto, que lo creo y es una instancia que uso
// enseguida. Una clase es como un 'molde' (como un molde de torta). Donde
// especifico que cosas los objetos creados a partir de esta clase pueden hacer.
// Una vez que tengo ese molde 'definido' luego puedo hacer `new MiClas()` y eso
// crea una 'nueva' instancia usando el molde.
class ClaseSimilAMiObjeto {
  constructor(nombre) {
    super();
    this.nombre = nombre;
  }

  sayHello() {}

  sayHello2 = () => {};
}
// En este caso no vamos a usar la clase por si sola sino que vamos a crear varios
// objetos con ella como 'molde' 'template' para que estos objetos que creo
// tengas las mismas propiedades y metodos.
const objUnoAPartirDeMiClase = new ClaseSimilAMiObjeto("rafa");
const objDosAPartirDeMiClase = new ClaseSimilAMiObjeto("ari");
// Si usamos objUnoAPartirDeMiClase
console.log(objUnoAPartirDeMiClase.nombre); // va a ser rafa
objUnoAPartirDeMiClase.sayHello(); // va a decir 'hello'
objUnoAPartirDeMiClase.sayHello2(); // va a decir 'hello 2'
// Si usamos objDosAPartirDeMiClase
console.log(objDosAPartirDeMiClase.nombre); // va a ser ari
objDosAPartirDeMiClase.sayHello(); // va a decir 'hello'
objDosAPartirDeMiClase.sayHello2(); // va a decir 'hello 2'

// ---------------------------------
// ----------------------------------
// ⭐️⭐️⭐️⭐️⭐️⭐️
// Ahora, volviendo a React
// Veamos un caso comun de ejemplo de clase

// Aca arranca la magia, esta clase 'extiende' React.Component, React.Component es
// una clase que React nos brinda y que ya tiene un monton de cositas dentro.
class MiComponente extends React.Component {
  // Por que extendemos (heredamos) de React.Component, es que necesitamos
  // pasar 'props' a 'super'. 'super' es algo propio de JS y clases, pero
  // solo lo necesitas usar cuando tu clase extiende otra, es una forma de decir
  // OK ahora me inicializo yo con lo que sea que el ususario me pasa (props)
  // pero tambien te voy a pasar props a vos 'clase padre' (React.Component) para que hagas lo que
  // quieras con ello.
  constructor(props) {
    super(props);
    // this.loQueMePinte. Esto es algo propio de JS classes.
    // al decir this.algo estoy diciendo, clase quiero que te guardes esta variable
    // adentro. 'this' es una forma de acceder a la clase. 
    // Ahora, this.state 'state' si es algo particularmente de 'react' react por convencion
    // nos dice que si nuestra clase hereda de React.Component y guarda algo en una propiedad de clase
    // 'state' entonces react va a darnos formas de guardar cosas ahi y de 'recalcular' lo que muestra
    // en pantalla en base a eso.
    this.state = { name: "Rafa" };
  }

  // Que es esto? esto es lo que llaman ciclos de vida. En el mundo de JS y clases,
  // no es ni mas ni menos que un metodo (como los que hicimos arriba). Nada especial
  // Peeeeero como nosotros somos una clase que va a ser usada para instanciar, crear,
  // componentes. Y esta clase hereda de React.Component. Es por esto que este metodo
  // tiene significado especial. React, por convencion nos dice que va a llamar a
  // este metodo cuando se 'monte' o 'renderice' por primera vez mi componente en
  // la pantalla. Osea cuando en algun lugar hagamos <MiComponente>, y el componente
  // se muestre, va a llamar este metodo.
  // Se llaman ciclo de vida por que suceden en un orden. Primero react llama
  // al constructor (por que eso es algo nativo de clases). Luego
  // Ejecuta los distintos metodos de ciclo de vida.
  // Cada metodo de ciclod e vida es util para hacer disintas cosas.
  // componentDidMount si popularmente usado para decir, ok una vez que te montaste
  // en la pantalla quiero que llames a esta api y luego hagas 'this.setState()' con
  // el resultado de la API.
  componentDidMount() {}

  // Otro pedazo de magia. Es un poco aleatorio, pero no!. Yo puedo declarar como
  // propiedad de clases cualquier 'funcion'. Pero React nos dice, mira, si queres que
  // este componente muestre algo en pantalla necesito que definas un metodo 'render'
  // y que ese metodo devuelva 'html' (ese html raro de react, jsx).
  render() {
    return (
      // Mas magia! 'setState'. Si bien nosotros no declaramos en esta clase el metodo
      // setState en ningun lado, al heredar de React.Component estamos heredando este
      // metodo que en react es MUY importante.
      // this.setState lo que hace es guarda cosas en 'this.state' y la parte mas importante
      // es que LUEGO de guardarla alli va a 'redibujar' nuestro component, en lenguaje
      // de react va a 're-renderizar' o tambien podemos decir que va a volver a llamar
      // este mismo metodo donde estamos 'render()'.
      // Basicamente CADA cambio que hacemos en una clase a 'this.state' PERO solo siempre
      // que lo hagamos usando 'this.setState' va a provocar que react llame devuelta
      // a 'render()' y si te fijas abajo dentro del 'div' lo que mostramos es 'this.state.name'
      // Es decir, react renderiza la primera vez, debido a que en el constructor definimos
      // un valor inicial para this.state, el valor de name es 'rafa'.
      // Peeero si luego hacemos click en este boton, y llamamos 'this.setState' boom, un moton
      // de magia sucede. React internamente va a cambiar 'this.state.name' y va a llamar
      // devuelta 'render()' y como render muestra un div que dentro muestra 'this.state.name'
      // y esta vez name fue actualizado por 'setState', vamos a ver 'nuevo nombre'.
      <div onClick={() => this.setState({ name: "nuevo nombre" })}>
        Hello my name is: {this.state.name}
      </div>
    );
  }

  // Asi como declaraste render o componentDidMount podes declarar metodos para vos
  // que solo uses vos, mientras que tu metodo no tenga el nombre de uno de los que react
  // usa intermante, entonces podes hacer lo que quieras. En js clases vos podes
  // referencias metodos usando 'this' this en una clase es como acceder a las cosas
  // que estan declaradas en una clase.
  // Ahora te preguntaras por que mierda use una sintaxis distinta a render,
  // en render usamos 'render() {}', pero aca hacemos 'metodo = () => {}'
  // La verdad que la teoria es larga, pero si todos los metodos que vos necesites para
  // vos los haces asi, te vas a ahorrar problemas con un error muy comun que es
  // 'this.miMetodo is undefined'. Hacelo por ahora memotecnicamente y luego podes ver
  // el por que para tus metodos utilitarios en una clase es mas practico declararlo
  // asi que declararlo 'metodo() {}'.
  miPropiosMetodos = () => {
    // Aqui podrias acceder a cualquier cosa de la clase, usando 'this', incluyendo this.state
    console.log(this.state.name);
  };
}
