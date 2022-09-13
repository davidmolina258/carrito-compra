import { Component } from "react";
import "./App.css";
import Productos from "./componentes/Productos";
import Lechuga from "./assets/lechuga.jpg";
import Tomate from "./assets/tomate.jpg";
import Arbejas from "./assets/arbejas.jpg";
import Header from "./componentes/Header";

class App extends Component {
  state = {
    productos: [
      {
        name: "Tomate",
        precio: 1500,
        img: Tomate,
      },
      {
        name: "Arbejas",
        precio: 1000,
        img: Arbejas,
      },
      {
        name: "Lechuga",
        precio: 500,
        img: Lechuga,
      },
    ],
    carro: [],
    esCarroVisible: false,
  };
  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((el) => el.name === producto.name)) {
      const newCarro = carro.map((el) =>
        el.name === producto.name
          ? {
              ...el,
              cantidad: el.cantidad + 1,
            }
          : el
      );
      return this.setState({
        carro: newCarro,
      });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };
  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({
      esCarroVisible: !this.state.esCarroVisible,
    });
  };
  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Header
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <h2>TIENDA</h2>
        <div className="producto-container">
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </div>
      </div>
    );
  }
}

export default App;
