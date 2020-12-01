import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<nav>
				<div className="nav-wrapper blue-grey darken-4">
					<div className="container">
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<div className="brand-logo center">
									<Link to="/modalform" className="add-button btn yellow darken-1" href="#">
										Add sticker
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
