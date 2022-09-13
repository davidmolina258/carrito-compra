import { Component } from "react";
import Producto from "./Producto";
import "./Productos.css";

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <>
        {productos.map((el) => (
          <Producto
            agregarAlCarro={agregarAlCarro}
            productos={el}
            key={el.name}
          />
        ))}
      </>
    );
  }
}

export default Productos;
