import { render, createElement, Component } from "tevreact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieName: "John Wick" };
  }
  render() {
    const { movieName } = this.state;
    const { userName } = this.props;

    return [<h1>Hello {userName},</h1>, <h1>Have you watched {movieName}?</h1>];
  }
}

render(<App userName={"Tev"} />, document.querySelector("#app"));
