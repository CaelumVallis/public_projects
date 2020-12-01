import contactsService from "../../contacts-service";

export let CONTACT_CLICK = "CONTACT_CLICK_ACTION";
export let contactClick = (id) => {
	return {
		type: CONTACT_CLICK,
		payload: id,
	};
};

export let SET_CONTACTS = "SET_CONTACTS_ACTION";
export let setContacts = () => {
	return (dispatch) => {
		contactsService.get("/").then(({ data }) => dispatch({ type: SET_CONTACTS, payload: data }));
	};
};

export let ADD_CONTACT = "ADD_CONTACT_ACTION";
export let addContact = (contact) => {
	return (dispatch) => {
		contactsService.post("/", contact).then(({ data }) => dispatch({ type: ADD_CONTACT, payload: data }));
	};
};

export let DELETE_CONTACT = "DELETE_CONTACT_ACTION";
export let deleteContact = (id) => {
	return (dispatch) => {
		contactsService.delete("/" + id);
		dispatch({ type: DELETE_CONTACT, payload: id });
	};
};

export let SAVE_CONTACT = "SAVE_CONTACT_ACTION";
export let saveContact = (contact) => {
	return (dispatch) => {
		contactsService.put("/" + contact.id, contact);
		dispatch({ type: SAVE_CONTACT, payload: contact });
	};
};
