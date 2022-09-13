import { Component } from "react";

const styles = {
  BubbleAlert: {
    backgroundColor: "#E9725A",
    borderRadius: "15px",
    color: "white",
    fontSize: "0.9rem",
    padding: "2px 10px",
    width: "20px",
  },
};

class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return " ";
    }
    return n > 9 ? "9+" : n;
  }
  render() {
    const { value } = this.props;
    return <span style={styles.BubbleAlert}>{this.getNumber(value)}</span>;
  }
}

export default BubbleAlert;
