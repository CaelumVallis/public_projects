import { Box, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Header from "./components/common/Header";
import SideBar from "./components/common/Sidebar";
import SideMenu from "./components/common/SideMenu";
import News from "./components/news/News";
import Profile from "./components/profile/Profile";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/auth/Login";

firebase.initializeApp({
	apiKey: "AIzaSyDyXt99tKC6cJt5a3IeTF04H73e302UBvM",
	authDomain: "social-demo-9721e.firebaseapp.com",
	databaseURL: "https://social-demo-9721e.firebaseio.com",
	projectId: "social-demo-9721e",
	storageBucket: "social-demo-9721e.appspot.com",
	messagingSenderId: "38123640038",
	appId: "1:38123640038:web:3a8d848adca8951ac51727",
});

let auth = firebase.auth();

function App() {
	let user = useAuthState(auth);
	let history = useHistory();

	auth.onAuthStateChanged((user) => {
		!user && history.push("/login");
	});

	return (
		<>
			<Header signOut={() => auth.signOut()} auth={auth} />
			<Switch>
				<Route path="/login">{auth.currentUser ? <Redirect to="/profile" /> : <Login />}</Route>
				<Route path="/">
					<Box m={2}>
						<Grid container justify="center">
							<Grid container item xl={6} spacing={2}>
								<Grid item xs={12} md={2}>
									<SideMenu />
								</Grid>
								<Grid container item md={10} spacing={2} wrap="nowrap">
									<Switch>
										<Route path="/profile">
											<Profile currentUser={auth.currentUser} />
										</Route>
										<Route path="/news">
											<News />
										</Route>
										<Route path="/" exact>
											<Redirect to="/profile" />
										</Route>
									</Switch>
									<Hidden smDown>
										<SideBar />
									</Hidden>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Route>
			</Switch>
		</>
	);
}

export default App;
