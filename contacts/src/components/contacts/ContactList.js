import React, { useEffect } from "react";
import { connect } from "react-redux";
import { contactClick, setContacts } from "../../store/actions/contacts";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

function ContactList({ list, contactClick, setContacts }) {
	useEffect(() => {
		setContacts();
	}, []);
	return (
		<Grid item xs={4}>
			<Paper elevation={3}>
				<List>
					{list.map((item) => {
						return (
							<ListItem
								button
								component={Link}
								to="/contactForm"
								key={item.id}
								onClick={() => {
									contactClick(item.id);
								}}
							>
								{item.name} {item.surname}
							</ListItem>
						);
					})}
				</List>
			</Paper>
			<Box mt={1}>
				<Button variant="contained" component={Link} color="primary" to="/contactForm">
					Create new contact
				</Button>
			</Box>
		</Grid>
	);
}

function mapStateToProps(state) {
	return state;
}

let mapDispatchToProps = {
	contactClick,
	setContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
