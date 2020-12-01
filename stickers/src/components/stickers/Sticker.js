import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./sticker.css";
import { Link } from "react-router-dom";

function Sticker({ sticker, onChange, updateSticker, deleteSticker, handleModal }) {
	let prevPosition = { x: 0, y: 0 };

	function getStickerPosition() {
		let { x, y } = sticker;
		return {
			top: y + 64,
			left: x,
		};
	}

	function onDrag(e) {
		prevPosition = {
			x: e.clientX,
			y: e.clientY,
		};
		document.addEventListener("mousemove", changePosition);
		document.addEventListener("mouseup", stopDrag);
	}

	function changePosition(e) {
		let { x, y } = sticker;

		onChange(sticker.id, {
			x: x + e.clientX - prevPosition.x,
			y: y + e.clientY - prevPosition.y,
		});
	}

	function stopDrag() {
		document.removeEventListener("mousemove", changePosition);
		document.removeEventListener("mouseup", stopDrag);
	}

	return (
		<div style={getStickerPosition()} className="sticker yellow">
			<div className="sticker-header">
				<span className="sticker-title">{sticker.title}</span>
				<div className="sticker-header-buttons">
					<Link to="/modalform">
						<i className="material-icons move-btn " onClick={() => handleModal(sticker)}>
							edit
						</i>
					</Link>
					<i className="material-icons move-btn " onMouseDown={onDrag} onMouseUp={() => updateSticker(sticker)}>
						touch_app
					</i>
					<i onClick={() => deleteSticker(sticker.id)} className="material-icons close-btn ">
						close
					</i>
				</div>
			</div>
			<div className="sticker-body">{sticker.description}</div>
		</div>
	);
}

export default Sticker;
