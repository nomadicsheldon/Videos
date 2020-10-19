import axios from "axios";

const KEY = "AIzaSyDdx7bm218DviZf2DKvWkzZzusy7ty5VzY";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResult: 5,
		key: KEY,
	},
});
