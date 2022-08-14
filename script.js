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
    btn.css("background-color", "#FF9B42");
    btn.text("Subscribing...");
    setTimeout(
      function() 
      {
        btn.off("hover");
        btn.css("background-color", "#6de37b");
        btn.text("Subscribed!");
      }, 1500);
  });

  $(".film").click(function (e) {
    const film = $(this).attr("id");
    const filmName = $(this).find(".filmTitle").text();

    $("#filmSelection").fadeIn();
    $("#filmOverlay").fadeIn();

    $("#filmInfo").html(filmDescriptions[film]);
    $("#filmSelectionTitle").text(filmName);
    $("#directorImage")
      .find("img")
      .attr("src", "images/directors/" + film + ".jpg");
  });

  $(".hiddenFilmSelection").click(function (e) {
    $("#filmSelection").fadeOut();
    $("#filmOverlay").fadeOut();
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
    'Carlos Santos brings us a complex collection of tales, all brought together through the ever-moving, ever-sprawling Mexico City metropolis.  "Multi-stranded", "winding", and "hilarious" - a promising feature from a relatively new director and cast.<br><br>Runtime: 93m<br>Genre: Comedy<br>Director: Carlos Santos',
  laMami:
    'Director Laura Herrero Garvin presents an unfiltered and close-to-the-heart documentary of the young entertainers at Cabaret Barba Azul.  A surprising spectrum of human emotions emerges from the dank, and often sinister, crevices of the world of late night adult entertainment - "intimate, often amusing, invariably informative".<br><br>Runtime: 82m<br>Genre: Documentary<br>Director: Laura Herrero Garvin',
  selvaTrágica:
    "Agnes finds herself face-to-face with dark and mysterious forces as she flees deeper into the jungles of southern Mexico and Belize.  Turning back would mean being forced into an unwelcoming marriage, thus her only way is forward.<br><br>Runtime: 96m<br>Genre: Drama/Mystery<br>Director: Yulene Olaizola",
  laVocera:
    "An inspiring story of one woman's desire to defend the rights of her people.  La Vocera follows the story of Marichuy, an indigenous Mexican woman, and her journey from rallying her town against the corrupt local government to her battle for a seat in the president's seat.  A radical story in times of rampant duplicity and deception in modern Mexican politics.<br><br>Runtime: 82m<br>Genre: Documentary<br>Director: Luciana Kaplan",
  prayersForTheStolen:
    "Prayers for the Stolen (Noche de fuego) follows the upbringing of three girls in a rural and violent Mexican town.  They must quickly learn how to adapt in a place where grown-women can't walk the streets during the day, letalone at night.  A sad yet redeeming story of hardship.<br><br>Runtime: 111m<br>Genre: Drama<br>Director: Tatiana Huezo",
  hisGameOfLives:
    "A bartender and DJ work together to manipulate the social scene of a New York City nightclub. Casual favors soon evolve into serious blackmail and the DJ becomes an unwilling accomplice while searching for a way out.  An intricate narrative with more than meets the eye.<br><br>Runtime: 106m<br>Genre: Drama<br>Director: Eric Parton",
  sinSeñasParticulares:
    "The gut-wrenching story of a mother's search for her son.  Distrusting official accounts of the death of her son, Magdalena takes up the dangerous and arduous across the US-Mexican border to find out the whereabouts of her son for herself.<br><br>Runtime: 95m<br>Genre: Drama<br>Director: Fernanda Valadez",
  unaPelículaDePolicias:
    "Two actors enter, two cops leave.  This documentary explores what it takes to become a policeman on the Mexico City beat.  Actors Leonardo Alonso and Raúl Briones pose as police cadets and undergo the months of training required of the Mexican police force, and uncover the grimy and cynical underwold of urban crime.<br><br>Runtime: 107m<br>Genre: Drama/Crime<br>Director: Alonso Ruizpalacios",
  losLobos:
    "'Wolves don't cry'.  Two children accompany their mother across the Mexican border into the United States; cooped up in a small flat, their curiosity gets the best of them and they begin to explore the outside world against their mother's best wishes.  An exploration of the innocence of childhood in a world with mixed intentions.<br><br>Runtime: 95m<br>Genre: Drama<br>Director: Samuel Kishi Leopo",
};
