import { GET_NEWS, GET_WEATHER } from "../actions/common";

let initialState = {
	list: [],
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_NEWS:
			return {
				...state,
				list: payload,
			};
		case GET_WEATHER:
			return {
				...state,
				weather: payload,
			};
		default:
			return state;
	}
}
