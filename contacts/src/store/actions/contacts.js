import contactsService from "../../contacts-service";

export let SET_CONTACTS = "SET_CONTACTS_ACTION";
export let setContacts = () => {
	return (dispatch) => {
		contactsService.get("/").then(({ data }) => dispatch({ type: SET_CONTACTS, payload: data }));
	};
};

export let DELETE_CONTACT = "DELETE_CONTACT_ACTION";
export let deleteContact = (id) => {
	return (dispatch) => {
		return contactsService.delete("/" + id).then(() => {
			dispatch({ type: DELETE_CONTACT, payload: id });
		});
	};
};

export let ADD_CONTACT = "ADD_CONTACT_ACTION";
let addContact = (contact, dispatch) => {
	return contactsService.post("/", contact).then(({ data }) => {
		dispatch({ type: ADD_CONTACT, payload: data });
	});
};

export let UPDATE_CONTACT = "UPDATE_CONTACT_ACTION";
let updateContact = (contact, dispatch) => {
	return contactsService.put("/" + contact.id, contact).then(() => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	});
};

export let saveContact = (contact) => (dispatch) => {
	return contact.id === null ? addContact(contact, dispatch) : updateContact(contact, dispatch);
};
