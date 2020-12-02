import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Backdrop, Container, Grid, Hidden, makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CloudIcon from "@material-ui/icons/Cloud";
import Weather from "./Weather";

function Header({ signOut, auth }) {
	let [open, setOpen] = useState(false);

	let useStyles = makeStyles(() => ({
		backdrop: {
			zIndex: 999,
			color: "#fff",
		},
	}));
	let classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Container>
					<Grid container justify="space-between">
						<Typography variant="h5">vReacte</Typography>
						<Grid container item xs={4} sm={2} justify="space-around" alignContent="center">
							<Hidden mdUp>
								<CloudIcon onClick={() => setOpen(true)} />
								<Backdrop className={classes.backdrop} open={open} onClick={() => setOpen(false)}>
									<Weather />
								</Backdrop>
							</Hidden>
							{auth.currentUser && <ExitToAppIcon onClick={signOut} />}
						</Grid>
					</Grid>
				</Container>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
