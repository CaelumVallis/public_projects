import { Box, Grid, Paper } from "@material-ui/core";

import React from "react";
import Weather from "./Weather";

function SideBar() {
	return (
		<Grid item>
			<Weather />
		</Grid>
	);
}

export default SideBar;
