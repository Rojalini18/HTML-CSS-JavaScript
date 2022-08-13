var tempArr = JSON.parse(localStorage.getItem("studentDatabase"));
var acceptArr = JSON.parse(localStorage.getItem("admitted")) || [];
var rejectArr = JSON.parse(localStorage.getItem("rejected")) || [];
tempArr.map(function (elem, index) {
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

  var c6 = document.createElement("button");
  c6.innerText = "accept";
  c6.addEventListener("click", function () {
    admitted1(elem);
  });

  var c7 = document.createElement("button");
  c7.innerText = "reject";
  c7.addEventListener("click", function () {
    rejected1(elem);
  });

  row.append(c1, c2, c3, c4, c5, c6, c7);
  document.querySelector("#body").append(row);
});

function admitted1(elem) {
  console.log(elem);
  acceptArr.push(elem);
  localStorage.setItem("admitted", JSON.stringify(acceptArr));
}

function rejected1(elem) {
  console.log(elem);
  rejectArr.push(elem);
  localStorage.setItem("admitted", JSON.stringify(rejectArr));
}
