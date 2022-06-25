const filmTitles = [
  "Chilangolandia",
  "La Mami",
  "Selva Trágica",
  "La Vocera",
  "Prayers for the Stolen",
  "His Game of Lives",
  "Sin Señas Particulares",
  "Una Película de Policias",
  "Los Lobos",
];

const toCamelCase = function (string) {
  return string.replace(/\s+(.)/g, function (match, group) {
    return group.toUpperCase();
  });
};

function makeFilm(item) {
  let camelCaseName = toCamelCase(item);
  camelCaseName = camelCaseName.charAt(0).toLowerCase() + camelCaseName.slice(1);
  console.log(camelCaseName);
  $("#films").append(
    '<div class="film" id="' + camelCaseName + '"><div class="poster"><img src="images/posters/' + camelCaseName + '.jpg" alt="" /></div><div class="filmTitle">' + item + '</div></div>'
  );
}

$(document).ready(function () {
  filmTitles.forEach(makeFilm);

  $("#newsletterButton").click(function (e) {
    const btn = $("#newsletterButton");
    const email = $("#newsletterInput").val();
    const regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!regex.test(email) || email === "") {
      alert("Please enter a valid email address");
      return;
    }
    btn.off("hover");
    btn.css("background-color", "#6de37b");
    btn.text("Subscribed!");
  });
});
