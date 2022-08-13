var acceptArr = JSON.parse(localStorage.getItem("admitted"));
console.log(acceptArr);

acceptArr.map(function (elem, index) {
  var row = document.createElement("tr");

  var c1 = document.createElement("td");
  c1.innerText = elem.tempname;

  var c2 = document.createElement("td");
  c2.innerText = elem.tempage;

  var c3 = document.createElement("td");
  c3.innerText = elem.tempgender;

  var c4 = document.createElement("td");
  c4.innerText = elem.tempemail;

  var c5 = document.createElement("td");
  c5.innerText = elem.tempphone;

  row.append(c1, c2, c3, c4, c5);
  document.querySelector("#body").append(row);
});
