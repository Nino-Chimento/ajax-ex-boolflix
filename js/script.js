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
// stampo le stelle
function printVote(vote)  {
   somma  ="";
 for (var i = 0; i <5; i++) {

   if ( i < vote) { //contatore i
     var risultato = '<i class="fas fa-star"></i>';
   } else {
     var risultato = '<i class="far fa-star"></i>';
   }
   somma = somma + risultato;
  }
  return somma;
}
// funzione stampa film
function stampaFilms(movies) {
  $(".wrap-films").html("");
  for (var i = 0; i < movies.length; i++) {
    var stelle = Math.round(movies[i].vote_average / 2)
    console.log(stelle);
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
      title : movies[i].title,
      original_title : movies[i].original_title,
      original_language : movies[i].original_language,
      vote_average : movies[i].vote_average,
      star :   printVote(stelle),
      nazione : movies[i].original_language,
      poster_path : movies[i].poster_path,
    } ;
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
  var urlFilms = "https://api.themoviedb.org/3/search/movie";
  var urlTv = "https://api.themoviedb.org/3/search/tv";
  chiamataAjax(urlFilms,ricerca);
  chiamataAjax(urlTv,ricerca)

}
function chiamataAjax(url,query) {
  $.ajax({
    // https://api.themoviedb.org/3/search/tv
    url : url,
    method : "GET",
    data : {
      api_key :"5ae01722ee057b2fdbbf926a615150da",
      query : query,
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
