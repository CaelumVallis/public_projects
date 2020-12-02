import { Grid, Typography, withWidth } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getNews } from "../../store/actions/common";
import Loader from "../common/Loader";
import NewsItem from "./NewsItem";

function News({ getNews, list, width }) {
	let [loaderStatus, setLoaderStatus] = useState(false);
	let [boxPadding, setBoxPadding] = useState(4);

	useEffect(() => {
		width === "xs" ? setBoxPadding(1) : setBoxPadding(4);
	}, [width]);

	useEffect(() => {
		if (!list.length) {
			setLoaderStatus(true);
			getNews().then(() => setLoaderStatus(false));
		}
	}, []);

	return (
		<>
			<Loader status={loaderStatus} />
			<Grid container item direction="column">
				{list.map((item) => {
					return <NewsItem boxPadding={boxPadding} key={item.url} item={item} />;
				})}
				<Typography align="center" variant="caption">
					Всего {list.length} новостей
				</Typography>
			</Grid>
		</>
	);
}

function mapStateToProps(state) {
	return state.common;
}

let mapDispatchToProps = {
	getNews,
};

export default withWidth()(connect(mapStateToProps, mapDispatchToProps)(News));
