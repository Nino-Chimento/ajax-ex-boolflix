// 5ae01722ee057b2fdbbf926a615150da
$(document).ready(function () {
  $("button").click(function () {
    var ricerca = $("input").val();
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
        stampaFilms(listaFilms)
      },
      error : function (request,state,error) {
        alert("errore e"+errore)
      }
    });
  });
});
// funzione stampa film
function stampaFilms(array) {
  for (var i = 0; i < array.length; i++) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = array[i];
    var html = template(context);
    $(".wrap-films").append(html);
  }
}
