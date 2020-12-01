import React from "react";
import "./modal.css";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { handleModal, createSticker, updateSticker } from "../../store/actions/stickers";

function ModalForm({ currentSticker, handleModal, createSticker, updateSticker }) {
	let history = useHistory();

	function onSubmit(newSticker) {
		if (currentSticker.id === undefined) {
			createSticker(newSticker);
		} else {
			updateSticker(newSticker);
		}
		handleModal(newSticker);
		history.push("/");
	}

	return (
		<Formik initialValues={currentSticker} onSubmit={onSubmit}>
			<div className="modal-bg">
				<div className="modal-form yellow">
					<div className="modal-header">
						<span>Create new sticker</span>
						<Link to="/">
							<i className="material-icons close-btn">close</i>
						</Link>
					</div>
					<div className="modal-body">
						<Form>
							<Field name="title" placeholder="Title" />
							<Field placeholder="Description" name="description" />
							<button type="submit">Submit</button>
						</Form>
					</div>
				</div>
			</div>
		</Formik>
	);
}

function mapStateToProps(state) {
	return state;
}

let mapDispatchToProps = {
	handleModal,
	createSticker,
	updateSticker,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
