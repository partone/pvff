const toCamelCase = function (string) {
  return string.replace(/\s+(.)/g, function (match, group) {
    return group.toUpperCase();
  });
};

function makeFilm(item) {
  let camelCaseName = toCamelCase(item);
  camelCaseName = camelCaseName.charAt(0).toLowerCase() + camelCaseName.slice(1);
  $("#films").append(
    '<div class="film" id="' +
      camelCaseName +
      '"><div class="poster"><img src="images/posters/' +
      camelCaseName +
      '.jpg" alt="" /></div><div class="filmTitle">' +
      item +
      "</div></div>"
  );
}

$(document).ready(function () {
  $("#filmSelection").hide();
  $("#filmOverlay").hide();
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

  $(".film").click(function (e) {
    const film = $(this).attr("id");
    const filmName = $(this).find('.filmTitle').text();

    $("#filmSelection").fadeIn();
    $("#filmOverlay").fadeIn();

    $("#filmInfo").html(filmDescriptions[film]);
    $("#filmSelectionTitle").text(filmName);
    $("#directorImage").find('img').attr("src","images/directors/" + film + ".jpg");
  });
});

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

const filmDescriptions = {
  chialngolandia:
    'Director Carlos Santos brings us a complex collection of tales, all brought together through the ever-moving, ever-sprawling Mexico City metropolis.  "Multi-stranded", "winding", and "hilarious" - a promising feature from a relatively new director and cast.',
  laMami:
    'Director Laura Herrero Garvin presents an unfiltered and close-to-the-heart documentary of the young entertainers at Cabaret Barba Azul.  A surprising spectrum of human emotions emerges from the dank, and often sinister, crevices of the world of late night adult entertainment - "intimate, often amusing, invariably informative".',
  selvaTrágica: "Yulene Olaizola",
  laVocera: "Luciana Kaplan",
  prayersForTheStolen: "Tatiana Huezo",
  hisGameOfLives: "Eric Parton",
  sinSeñasParticulares: "Fernanda Valadez",
  unaPelículaDePolicias:
    "Two actors enter, two cops leave.  This documentary explores what it takes to become a policeman on the Mexico City beat.  Actors Leonardo Alonso and Raúl Briones pose as police cadets and undergo the months of training required of the Mexican police force, and uncover the grimy and cynical underwold of urban crime.<br><br>Runtime: 1h 47m<br>Genre: Drama/Crime<br>Director: Alonso Ruizpalacios",
  losLobos: "Samuel Kishi Leopo",
};
