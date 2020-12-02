import news_api from "../../api/news_api";
import weather_api from "../../api/weather_api";

export let GET_NEWS = "GET_NEWS_ACTION";
export let getNews = () => {
	return (dispatch) => {
		return news_api.get("/").then(({ data }) => dispatch({ type: GET_NEWS, payload: data.articles }));
	};
};

export let GET_WEATHER = "GET_WEATHER_ACTION";
export let getWeather = () => {
	return (dispatch) => {
		return weather_api.get("/").then(({ data }) => dispatch({ type: GET_WEATHER, payload: data }));
	};
};
