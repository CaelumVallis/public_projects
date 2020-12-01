import stickerService from "../../sticker-service";

export let CREATE_STICKER = "CREATE_STICKER_ACTION";
export let createSticker = (sticker) => {
	return (dispatch) => {
		stickerService.post("/", sticker).then(({ data }) => dispatch({ type: CREATE_STICKER, payload: data }));
	};
};

export let GET_STICKERS = "GET_STICKERS_ACTION";
export let getStickers = () => {
	return (dispatch) => {
		stickerService.get("/").then(({ data }) => dispatch({ type: GET_STICKERS, payload: data }));
	};
};

export let DELETE_STICKER = "DELETE_STICKER_ACTION";
export let deleteSticker = (id) => {
	return (dispatch) => {
		stickerService.delete("/" + id);
		dispatch({ type: DELETE_STICKER, payload: id });
	};
};

export let MOVE_STICKER = "MOVE_STICKER_ACTION";
export let moveSticker = (sticker) => {
	return (dispatch) => {
		dispatch({ type: MOVE_STICKER, payload: sticker });
	};
};

export let UPDATE_STICKER = "UPDATE_STICKER_ACTION";
export let updateSticker = (sticker) => {
	return (dispatch) => {
		stickerService.put("/" + sticker.id, sticker);
		dispatch({ type: UPDATE_STICKER, payload: sticker });
	};
};

export let HANDLE_MODAL = "HANDLE_MODAL_ACTION";
export let handleModal = (payload) => {
	return (dispatch) => {
		dispatch({ type: HANDLE_MODAL, payload });
	};
};
