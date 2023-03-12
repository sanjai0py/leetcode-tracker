import axios from "axios";
import Chart from "chart.js/auto";

// let leetcode_name = [
//   "sanjai0py",
//   "Pragadesh-45",
//   "sathasivam2001",
//   "Aribaskar_j_b",
//   "PurujitKG",
// ];

const ctx = document.getElementById("myChart");

const res = (v) => {
  return axios.get(`https://leetcode-stats-api.herokuapp.com/${v}`);
};

const val = Promise.all([
  res("sanjai0py"),
  res("sathasivam2001"),
  res("Pragadesh-45"),
  res("PurujitKG"),
])
  .then(function (response) {
    return response.map((val) => val.data);
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.error("Wait for few Minutes");
  });
