import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactForm from "./components/contacts/ContactForm";
import ContactList from "./components/contacts/ContactList";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function App() {
	return (
		<Router>
			<Box m={3}>
				<Grid container spacing={2}>
					<ContactList />
					<Route path="/contactForm/:id">
						<ContactForm />
					</Route>
				</Grid>
			</Box>
		</Router>
	);
}

export default App;
