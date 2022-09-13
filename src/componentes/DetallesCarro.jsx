import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "white",
    position: "absolute",
    right: 50,
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "10px",
    width: "300px",
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  li: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};
class DetalleCarro extends Component {
  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <article style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((el) => (
            <li style={styles.li} key={el.name}>
              <img src={el.img} alt={el.name} width={"50px"} height={"32px"} />
              {el.name}
              <span>{el.cantidad}</span>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}
export default DetalleCarro;
