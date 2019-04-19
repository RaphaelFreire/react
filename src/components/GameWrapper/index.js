import React, { Component } from "react";

import NextPlayer from "../NextPlayer";
import BoardCollab from "../BoardCollab";

import "./styles.css";

class GameWrapper extends Component {
        state = {player: "X"};

        handleClick = () => {
                this.setState({player: this.state.player === "X" ? "0" : "X"})
        }

	render() {
                return (
                         <main className="game-wrapper">
                                <NextPlayer player= {this.state.player} />
                                <BoardCollab onClick={this.handleClick} />
                        </main>
                )
	};
};

export default GameWrapper;
