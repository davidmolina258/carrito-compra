import { Component } from "react";
import {} from "./Boton.css";

class Boton extends Component {
  // const {agregarAlCarro}=this.props;
  render() {
    return (
      <button className="btn-agregar" {...this.props}>
        Agregar
      </button>
    );
  }
}

export default Boton;
