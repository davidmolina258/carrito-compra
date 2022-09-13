import { Component } from "react";
import "./Producto.css";
import Boton from "./Boton";

class Producto extends Component {
  render() {
    const { agregarAlCarro, productos } = this.props;
    return (
      <article className="card">
        <img src={productos.img} alt={productos.name} />
        <h2>{productos.name}</h2>
        <p>{productos.precio}</p>
        <Boton onClick={() => agregarAlCarro(productos)} />
      </article>
    );
  }
}

export default Producto;
