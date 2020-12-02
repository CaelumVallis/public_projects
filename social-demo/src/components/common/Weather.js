import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getWeather } from "../../store/actions/common";
import CachedIcon from "@material-ui/icons/Cached";

function Weather({ getWeather, weather }) {
	useEffect(() => {
		getWeather();
	}, []);

	return (
		<>
			{weather && (
				<Paper>
					<Box p={3}>
						<Typography variant="h5">{weather.location.country},</Typography>
						<Typography noWrap variant="h5">
							{weather.location.name}
						</Typography>
						<Grid container alignItems="center">
							<img src={weather.current.condition.icon} />
							<Typography variant="h4">{weather.current.temp_c}°</Typography>
						</Grid>
						<Grid container justify="space-between" alignItems="center">
							<Typography variant="caption">{weather.current.last_updated}</Typography>
							<Button onClick={() => getWeather()}>
								<CachedIcon />
							</Button>
						</Grid>
					</Box>
				</Paper>
			)}
		</>
	);
}

function mapStateToProps(state) {
	return state.common;
}

let mapDispatchToProps = {
	getWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
