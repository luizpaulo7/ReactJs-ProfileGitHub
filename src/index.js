import React from "react";
import ReactDOM from "react-dom";

import api from "./api";

import "./styles.css";

class ShoppingList extends React.Component {
  state = {
    nome: "",
    public_repos: "",
    avatar: "",
    bio: ""
  };

  componentDidMount() {
    this.repo();
  }

  repo = async () => {
    const response = await api.get();

    this.setState({
      nome: response.data.name,
      avatar: response.data.avatar_url,
      public_repos: response.data.public_repos,
      bio: response.data.bio
    });
  };
  render() {
    return (
      <div className="repo">
        <ul>
          <li>
            <img src={this.state.avatar} />
          </li>
          <li>
            <h1>{this.state.nome}</h1>
          </li>
          <li>
            <strong>Bio: </strong>
            {this.state.bio}
          </li>
          <li>
            <strong>Repositórios: </strong>
            {this.state.public_repos}
          </li>
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ShoppingList />, rootElement);
