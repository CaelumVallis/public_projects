import React from "react";
import { Grid, Typography } from "@material-ui/core";

function ProfileInfo({ email }) {
	return (
		<div>
			<Grid container spacing={5}>
				<Grid item>
					<img className="profile-pic" src="https://picsum.photos/200" alt="" />
				</Grid>
				<Grid item>
					<Grid container direction="column">
						<Typography variant="h3">Hello,</Typography>
						<Typography variant="h6">e-mail: {email}</Typography>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default ProfileInfo;
