if (localStorage.getItem("color") != "") {
  let colorName = localStorage.getItem("color");
  $(".alternate-style").attr("disabled", "true");
  $(".alternate-style[title=" + colorName + "]").removeAttr("disabled");
}

function setActiveSyle(colorName) {
  let chosenColor = colorName;
  $(".alternate-style").attr("disabled", "true");
  $(".alternate-style[title=" + colorName + "]").removeAttr("disabled");
  localStorage.setItem("color", chosenColor);
}

$(".toggle-style-switcher").click(function () {
  $(".style-switcher").toggleClass("open");
});

