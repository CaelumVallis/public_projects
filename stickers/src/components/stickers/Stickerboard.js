import React, { useEffect } from "react";
import ModalForm from "../ModalForm/ModalForm";
import Sticker from "./Sticker";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { deleteSticker, getStickers, moveSticker, updateSticker, handleModal } from "../../store/actions/stickers";

function Stickerboard({ list, getStickers, moveSticker, updateSticker, deleteSticker, handleModal, modalStatus }) {
	useEffect(() => {
		getStickers();
	}, []);

	function onChange(id, changes) {
		let sticker = list.find((item) => item.id === id);
		moveSticker({ ...sticker, ...changes });
	}

	return (
		<div className="sticker-board">
			<Route path="/modalform">
				<ModalForm />
			</Route>
			{list.map((item) => {
				return (
					<Sticker
						key={item.id}
						sticker={item}
						onChange={onChange}
						updateSticker={updateSticker}
						deleteSticker={deleteSticker}
						handleModal={handleModal}
					/>
				);
			})}
		</div>
	);
}

function mapStateToProps(state) {
	return state;
}

let mapDispatchToProps = {
	getStickers,
	deleteSticker,
	moveSticker,
	updateSticker,
	handleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stickerboard);
