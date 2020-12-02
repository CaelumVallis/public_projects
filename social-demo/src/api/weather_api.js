import axios from "axios";

export default axios.create({
	baseURL: "http://api.weatherapi.com/v1/current.json?key=b19f7bfd3c16409286c181513203011&q=Dnipropetrovsk",
});
