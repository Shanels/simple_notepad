for (var i = 0; i < 16; i++) {
  var row = createRow();
  for (var k = 0; k < 16; k++) {
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