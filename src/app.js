const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  const user = "erste@eloaded.eu";
  const data = require("./data.json");

  //Solution to exercise 1
  let totalOrders = data.orders.filter((curr) => {
    return curr.user === user;
  });
  console.log("Exercise 2");
  console.log("Total number of orders " + totalOrders.length);

  //Solution to exercise 3
  console.log("Exercise 3");
  let sortedData = totalOrders.sort((a, b) => {
    var nameA = a.date,
      nameB = b.date;
    if (nameA > nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(sortedData);

  //SOlution to exercise 2
  console.log("Exercise 2");
  let oldestOrder = sortedData[sortedData.length - 1];
  console.log(oldestOrder);

  const result = 0;
  // EX1.
  // Given as input:
  // - user: string
  // - data: Object (see data.json)
  //
  // Calculate how many orders the input user has.
  //
  // output: 4

  // EX2.
  // Find the oldest order of the input user.
  //
  // output: {"user":"erste@eloaded.eu", "date":"2020-01-01T00:00:00.000Z", "price":74568}

  // EX3.
  // Sort all the orders from newest to oldest of the input user.
  //
  // output: [{ user: "erste@eloaded.eu", ...}, {...}, ...]

  res.status(200).json(result);
});

module.exports = app;
