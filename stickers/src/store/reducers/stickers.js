import {
	CREATE_STICKER,
	DELETE_STICKER,
	GET_STICKERS,
	HANDLE_MODAL,
	MOVE_STICKER,
	UPDATE_STICKER,
} from "../actions/stickers";

let initialState = {
	list: [],
	currentSticker: {
		title: "",
		description: "",
		x: 10,
		y: 74,
	},
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_STICKERS:
			return {
				...state,
				list: payload,
			};

		case CREATE_STICKER:
			return {
				...state,
				list: [...state.list, payload],
			};
		case MOVE_STICKER:
			return {
				...state,
				list: state.list.map((el) => (el.id !== payload.id ? el : payload)),
			};
		case DELETE_STICKER:
			return {
				...state,
				list: state.list.filter((item) => item.id !== payload),
			};
		case HANDLE_MODAL:
			return {
				...state,
				currentSticker: { ...state.currentSticker, ...payload },
			};
		case UPDATE_STICKER:
			return {
				...state,
				list: state.list.map((el) => (el.id !== payload.id ? el : payload)),
			};
		default:
			return state;
	}
}
