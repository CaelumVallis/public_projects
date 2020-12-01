import { CONTACT_CLICK, SET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, SAVE_CONTACT } from "../actions/contacts";

let initialState = {
	list: [],
	currentContact: getEmptyContact(),
};

function getEmptyContact() {
	return {
		id: null,
		name: "",
		surname: "",
		phone: "",
	};
}

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_CONTACTS:
			return {
				...state,
				list: payload,
			};

		case ADD_CONTACT:
			return {
				...state,
				list: [...state.list, payload],
				currentContact: payload,
			};

		case SAVE_CONTACT:
			return {
				...state,
				list: state.list.map((el) => (el.id !== payload.id ? el : payload)),
			};

		case DELETE_CONTACT:
			return {
				...state,
				list: state.list.filter((item) => item.id !== payload),
				currentContact: getEmptyContact(),
			};

		case CONTACT_CLICK:
			return {
				...state,
				currentContact: state.list.find((item) => item.id === payload),
			};

		default:
			return state;
	}
}
