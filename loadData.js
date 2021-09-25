$(function () {
  let timeType = "daily";
  let previousTime = "Yesterday - ";
  $.getJSON("./data.json", function (data) {
    data.map((value) => {
      console.log(value);
      $("#content").append(
        "<article><div class='row'><h1>" +
          value.title +
          "</h1><svg></svg></div><div class='row\"'><h2>" +
          value.timeframes[timeType].current +
          " hrs</h2><h3>" +
          previousTime +
          value.timeframes[timeType].previous +
          " hrs</h3></div></article>"
      );
    });
  });
});
