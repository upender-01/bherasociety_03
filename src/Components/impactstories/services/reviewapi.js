// services/reviewApi.js

import axios from "axios";

const API =
  "http://localhost:5000/api/reviews";

export const getReviews = () =>
  axios.get(API);

export const addReview = (data) =>
  axios.post(API, data);