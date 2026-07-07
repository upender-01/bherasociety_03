// services/reviewApi.js
const API_URL=import.meta.env.VITE_API_URL;

import axios from "axios";

const API =
  `${API_URL}/api/reviews`;

export const getReviews = () =>
  axios.get(API);

export const addReview = (data) =>
  axios.post(API, data);