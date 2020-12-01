import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import Header from "./components/Header/Header";
import Stickerboard from "./components/stickers/Stickerboard";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	useEffect(() => {
		M.AutoInit();
	}, []);

	return (
		<Router>
			<div>
				<Header />
				<Stickerboard />
			</div>
		</Router>
	);
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(App);
