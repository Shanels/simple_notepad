let w = prompt("Ширина", 32);
let h = prompt("Высота", 32);




for (var i = 0; i < h; i++) {
  var row = createRow();
  for (var k = 0; k < w; k++) {
    createElement(row);
  };
};

function createRow() {
  var parent = document.getElementById('parent');
  var row = document.createElement('div');
  row.className = "row";
  parent.appendChild(row);
  return row;
}

function createElement(parent) {
  var elem = document.createElement('div');
  elem.className = "elem";
  parent.appendChild(elem);
}

$('.elem').hover(function() {
  $( this ).addClass("elemBlack");
});

$('.elem').click(function() {
  $( this ).toggleClass('elemBlack');
});

/*$('.elem').fadeOut('slow');
$('.elem').hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});*/


$('.clearButton').click(function() {
  $('div.elem').removeClass('elemBlack');
})
let x = 750/w;
$('.elem').css('width', x);

let y = 750/w;
$('.elem').css('height', y);
$('.row').css('height', y);

 /*$(document).ready(function(){  //тест на jquery
 alert(jQuery.fn.jquery);
 });
 */