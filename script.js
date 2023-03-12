
let leetcode_name = [
  "sanjai0py",
  "Pragadesh-45",
  "sathasivam2001",
  "Aribaskar_j_b",
  "PurujitKG",
];

const ctx = document.getElementById("myChart");

let leetcode = leetcode_name.map((v) =>
  axios.get(`https://leetcode-stats-api.herokuapp.com/${v}`)
);

const val = Promise.all(leetcode)
  .then(function (response) {
    return response.map((val) => val.data);
  })
  .then(function (result) {
    let totalSolved = result.map((val) => val.totalSolved);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: leetcode_name,
        datasets: [
          {
            label: "# of Solved",
            data: totalSolved,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            max: 300,
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch(function (err) {
    console.error("Wait for few Minutes");
  });
