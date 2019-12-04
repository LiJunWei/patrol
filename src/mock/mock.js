// module.exports = chart;
console.log("mock mounting");
const Mock = require("mockjs");
Mock.setup({
  timeout: 800 // setter delay time
});
Mock.mock("/api/dashboard/chart", "get", chart);
console.log("mock mounted");

function chart() {
  return [20, 40, 6, 4, 20, 20];
}
