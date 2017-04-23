$('.taskinput').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    var answer = $("input[name=input-text]").val();
    var currentDiv = $('<div class="col-sm-4 item">' + answer + '</div>')
    $('.tasks').append(currentDiv);
  }
var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};
$(currentDiv).css('background',randomColor());
});
