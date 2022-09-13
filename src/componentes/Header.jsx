import { Component } from "react";
import Carro from "./Carro";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.2)",
  },
};

class Header extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    return (
      <header style={styles.header}>
        <h1>Mercado</h1>
        <Carro
          carro={carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={mostrarCarro}
        />
      </header>
    );
  }
}

export default Header;
