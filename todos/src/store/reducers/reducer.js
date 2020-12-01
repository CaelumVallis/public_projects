import { SET_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/actions";

let initialState = {
	list: [],
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_TODOS:
			return {
				...state,
				list: payload,
			};

		case ADD_TODO:
			return {
				...state,
				list: [...state.list, payload],
			};

		case DELETE_TODO:
			return {
				...state,
				list: state.list.filter((item) => item.id !== payload),
			};

		case TOGGLE_TODO:
			return {
				...state,
				list: state.list.map((item) => {
					if (item.id !== payload.id) return item;
					else return payload;
				}),
			};

		default:
			return state;
	}
}
