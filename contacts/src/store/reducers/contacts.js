import { SET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../actions/contacts";

let initialState = {
	list: [],
};

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

		case UPDATE_CONTACT:
			return {
				...state,
				list: state.list.map((el) => (el.id !== payload.id ? el : payload)),
			};

		case DELETE_CONTACT:
			return {
				...state,
				list: state.list.filter((item) => item.id !== payload),
			};

		default:
			return state;
	}
}
