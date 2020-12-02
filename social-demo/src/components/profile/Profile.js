import React, { useState } from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import "./profile.css";
import { useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import Loader from "../common/Loader";

function Profile({ currentUser }) {
	let [loaderStatus, setLoaderStatus] = useState(false);

	useEffect(() => {
		currentUser === null ? setLoaderStatus(true) : setLoaderStatus(false);
	}, [currentUser]);

	return (
		<>
			<Grid item xs={12} md={10}>
				<Loader status={loaderStatus} />
				<Paper>
					<Box p={3}>{currentUser && <ProfileInfo email={currentUser.email} />}</Box>
				</Paper>
			</Grid>
		</>
	);
}

export default Profile;
