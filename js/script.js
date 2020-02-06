// 5ae01722ee057b2fdbbf926a615150da
$(document).ready(function () {
  $("button").click(function () {
    search()
  });
  $("input").keypress(function () {
    if(event.which == 13 || event.keyCode == 13) {
      search();
    }
  });
});

// funzione stampa film
function stampaFilms(movies) {
  $(".wrap-films").html("");
  for (var i = 0; i < movies.length; i++) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = movies[i];
    var html = template(context);
    $(".wrap-films").append(html);
  }
}
function search() {
  ricerca = $("input").val();
  $("input").val("")
  if (ricerca.length == 0) {
    alert("inserisci una parola chiave grazie")
  }
  $.ajax({
    url : "https://api.themoviedb.org/3/search/movie",
    method : "GET",
    data : {
      api_key :"5ae01722ee057b2fdbbf926a615150da",
      query : ricerca,
      language:"it-IT"
    },
    success : function (data) {
      var listaFilms = data.results;
      if (listaFilms.length == 0) {
        alert("mi spiace la ricerca non ha prodotto risultati")
      }
      listaFilms.sort(confronta)
      stampaFilms(listaFilms)
    },
    error : function (request,state,error) {
      alert("errore e"+errore)
    }
  });
}
// funzione che ordina
function confronta(a,b) {
if (a.title < b.title) { return 1; }
else {
if (a.title > b.title) { return -1; }
else { return 0; }
}
}
