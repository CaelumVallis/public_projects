import React from "react";
import { Form, Formik } from "formik";
import { connect } from "react-redux";
import { deleteContact, saveContact } from "../../store/actions/contacts";
import { useHistory, useParams, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import MyInputField from "./MyInputField";
import Button from "@material-ui/core/Button";

function ContactForm({ currentContact, deleteContact, saveContact }) {
	let history = useHistory();
	let params = useParams();

	function onDelete() {
		deleteContact(params.id).then(() => history.push("/"));
	}

	function onSubmit(newContact) {
		saveContact(newContact).then(() => history.push("/"));
	}

	function validateText(value) {
		let error;

		if (!value) {
			error = "Required";
		} else if (!/^(?=.{3,20}$)[a-zA-Z0-9]/i.test(value))
			error = " Should be 8-20 characters long && contain only alphanumeric characters";
		return error;
	}

	function validatePhone(value) {
		let error;
		if (!value) {
			error = "Required";
		} else if (!/([0-9])/i.test(value)) {
			error = "Invalid phone number";
		}
		return error;
	}

	return (
		<Grid item xs={4}>
			<Paper elevation={3}>
				<Formik enableReinitialize initialValues={currentContact} onSubmit={onSubmit}>
					{({ errors, touched, validateForm }) => (
						<Form>
							<List>
								<ListItem>
									<MyInputField
										name="name"
										label="Name"
										validate={validateText}
										error={touched.name ? errors.name : false}
									/>
								</ListItem>
								<ListItem>
									<MyInputField
										name="surname"
										label="Surname"
										validate={validateText}
										error={touched.surname ? errors.surname : false}
									/>
								</ListItem>
								<ListItem>
									<MyInputField
										name="phone"
										label="Phone"
										validate={validatePhone}
										error={touched.phone ? errors.phone : false}
									/>
								</ListItem>
								<ListItem>
									<Grid container justify="space-between">
										<Grid item>
											<Button variant="contained" color="primary" type="submit" onClick={() => validateForm()}>
												Save
											</Button>
										</Grid>
										<Grid>
											<Button variant="contained" color="secondary" onClick={() => onDelete()}>
												Delete
											</Button>
										</Grid>
									</Grid>
								</ListItem>
							</List>
						</Form>
					)}
				</Formik>
			</Paper>
		</Grid>
	);
}

function mapStateToProps(state, { match: { params } }) {
	console.log(state, params);
	let currentContact = state.list.find((item) => item.id === params.id);
	currentContact = currentContact || {
		id: null,
		name: "",
		surname: "",
		phone: "",
	};
	return { currentContact };
}

let mapDispatchToProps = {
	deleteContact,
	saveContact,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactForm));
