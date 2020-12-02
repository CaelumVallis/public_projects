import React from "react";
import { Box, Grid, Link, Paper, Typography } from "@material-ui/core";

function NewsItem({ item, boxPadding }) {
	return (
		<Grid item>
			<Box mb={3}>
				<Paper>
					<Box p={boxPadding}>
						<Box mb={2}>
							<Typography noWrap={false} variant="h4">
								{item.title}
							</Typography>
						</Box>
						<Box mb={2}>
							<Typography noWrap={false} variant="body1">
								{item.description}
							</Typography>
						</Box>
						<Box>
							<Grid container item justify="space-between">
								<Grid item>
									<Link target="_blank" rel="noreferrer" href={item.url}>
										Source: {item.source.name}
									</Link>
								</Grid>
								<Grid item>
									<Typography variant="caption">{item.publishedAt}</Typography>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Paper>
			</Box>
		</Grid>
	);
}

export default NewsItem;
