function allclear() {
  document.getElementById("result").value = "";
}

function clr() {
  var xyz = document.getElementById("result").value;
  document.getElementById("result").value = xyz.substring(0, xyz.length - 1);
}
function con(a) {
  document.getElementById("result").value += a;
}
function res() {
  let ans = eval(document.getElementById("result").value);
  document.getElementById("result").value = ans;
}
