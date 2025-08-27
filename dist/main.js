const source = $("#wonders-template").html();
const template = Handlebars.compile(source);

const render = function (wonders) {
  $("#wonders").empty();
  let newHtml = template({ wonders });
  $("#wonders").append(newHtml);
};

$("#wonders").on("click", ".visit", function () {
  let wonder = $(this).closest(".wonder").find(".name").text().trim();
  updateVisited(wonder.split("-")[0].trim());
});

const fetch = function () {
  $.get("/wonders", function (response) {
    render(response);
  });
};

const addWonder = function () {
  let newWonder = $("#new-wonder-input").val();
  let newLocation = $("#new-location-input").val();
  let data = { name: newWonder, location: newLocation };
  $.post("/wonder", data, function (response) {
    console.log("POST complete");
    fetch();
  });
};

const updateVisited = function (name) {
  $.ajax({
    url: `/wonder/${name}`,
    method: "PUT",
    success: function (response) {
      console.log("PUT complete:", response);
      fetch();
    },
    error: function (err) {
      console.error("PUT error:", err);
    },
  });
};

fetch(); //load the data on page load


