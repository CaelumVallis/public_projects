import axios from "axios";

export default axios.create({
	baseURL: "http://newsapi.org/v2/top-headlines?country=ua&",
	params: { apiKey: "397d03946f5a4975822f605485d9c274" },
});
