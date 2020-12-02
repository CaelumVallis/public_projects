import axios from "axios";

export default axios.create({
	baseURL: "https://mysterious-reef-29460.herokuapp.com/api/v1",
});

// profile: /user-info/:id (1)
// news: /news
