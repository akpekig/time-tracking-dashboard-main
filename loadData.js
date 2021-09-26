$(function () {
  let timeType = "daily";
  let previousTime = "Yesterday - ";
  
  $('.time-select').click(function() {
    $('.time-select').removeClass("active");
    timeType = $(this).val().toLowerCase();
    switch(timeType) {
      case "daily":
        previousTime = "Yesterday - ";
        break;
      case "weekly":
        previousTime = "Last week - ";
        break;
      case "monthly":
        previousTime = "Last month - ";
        break;
      default:
        previousTime = "Yesterday - ";
        break;
    }
    $("#content").children().slideUp();
    let oldTimes = $( "body" ).find( ":hidden" ).not( "script" )
    oldTimes.remove();
    $.getJSON("./data.json", function (data) {
      data.map((value) => {
        let titleForHTML = value.title.toString().toLowerCase().replace(' ', '-');
        $("#content").append(
          "<article><div class='icon-wrapper' id='" + titleForHTML + 
          "'><img src='.\/images\/icon-" + titleForHTML + 
            ".svg' alt='" + value.title + 
            "'></div><div class='wrapper'><div class='row'><span>" + value.title +
            "</span><img src='./images/icon-ellipsis.svg' width='21' height='5'" + 
            "alt='Obligatory sandwich menu imitation' ></img></div><div class='row' id='col'><h1>" +
            value.timeframes[timeType].current +
            " hrs</h1><h2 class='inactive'>" +
            previousTime +
            value.timeframes[timeType].previous +
            " hrs</h2></div></div></article>"
        );
      });
    });
  });
  $.getJSON("./data.json", function (data) {
    data.map((value) => {
      let titleForHTML = value.title.toString().toLowerCase().replace(' ', '-');
      $("#content").append(
        "<article><div class='icon-wrapper' id='" + titleForHTML + 
        "'><img src='.\/images\/icon-" + titleForHTML + 
          ".svg' alt='" + value.title + 
          "'></div><div class='wrapper'><div class='row'><span>" + value.title +
          "</span><img src='./images/icon-ellipsis.svg' width='21' height='5'" + 
          "alt='Obligatory sandwich menu imitation' ></img></div><div class='row' id='col'><h1>" +
          value.timeframes[timeType].current +
          " hrs</h1><h2 class='inactive'>" +
          previousTime +
          value.timeframes[timeType].previous +
          " hrs</h2></div></div></article>"
      );
    });
  });
});
