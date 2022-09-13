import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
  btn: {
    position: "relative",
    border: "none",
    width: "150px",
    height: "50px",
    backgroundColor: "rgb(5, 5, 49)",
    color: "white",
    borderRadius: "10px",
    fontSize: "larger",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    zIndex: "999",
    bottom: 12,
    left: 20,
  },
};

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.btn}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
