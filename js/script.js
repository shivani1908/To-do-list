var i = 0;
$('.taskinput').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
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

    var answer = $(".taskinput").val();
    i++;
    var currentDiv = $('<div class="col-sm-6 outerDiv"><div class="col-sm-12 innerDiv" id= "item' + i + '">' + answer + '</div></div>')
    $('.tasks').append(currentDiv);
    $(".taskinput").val('');
    $("#item"+ i).css('background',randomColor());
  }


});
