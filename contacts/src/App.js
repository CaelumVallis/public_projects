import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactForm from "./components/contacts/ContactForm";
import ContactList from "./components/contacts/ContactList";
import { setContacts, addContact, deleteContact, saveContact, contactClick } from "./store/actions/contacts";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function App() {
	return (
		<Router>
			<Box m={3}>
				<Grid container spacing={2}>
					<ContactList />
					<Route path="/contactForm">
						<ContactForm />
					</Route>
				</Grid>
			</Box>
		</Router>
	);
}

function mapStateToProps(state) {
	return state;
}

const mapDispatchToProps = {
	setContacts,
	addContact,
	deleteContact,
	saveContact,
	contactClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
