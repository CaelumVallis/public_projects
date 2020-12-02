import React from "react";
import { Hidden, List, ListItem, ListItemIcon, ListItemText, Paper, Tab, Tabs } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Link } from "react-router-dom";

function SideMenu() {
	return (
		<>
			<Hidden smDown>
				<Paper>
					<List>
						<ListItem component={Link} to={"/profile"} button>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary={"Profile"} />
						</ListItem>
						<ListItem component={Link} to={"/news"} button>
							<ListItemIcon>
								<ListAltIcon />
							</ListItemIcon>
							<ListItemText primary={"News"} />
						</ListItem>
					</List>
				</Paper>
			</Hidden>
			<Hidden mdUp>
				<Tabs centered value={false}>
					<Tab component={Link} to={"/profile"} label="Profile" />
					<Tab component={Link} to={"/news"} label="News" />
				</Tabs>
			</Hidden>
		</>
	);
}

export default SideMenu;
