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
      },
      error : function (request,state,error) {
        alert("errore e"+errore)
      }
    });
  });
});
