document.addEventListener("DOMContentLoaded", function(event) {
    Output();
  });
function Output(){

  var keyword=localStorage.getItem("KEY");
$.getJSON("http://thunderx.cise.ufl.edu:8080/api/s/".concat(keyword) , showResults);

}

function showResults(response){
  var results = response.results;

  var rows = results.map(function(item){
    return createRow(item.title, item.image, item.date);
  });

    rows.forEach(function(row){
      document.getElementById("resultsTable").appendChild(row);
    });
    document.getElementById("apiList").style.display = "block";
}


function showSearchForm() {
  window.location.href="./index.html"
}
function createRow(user, iconUrl, tweet){
  var tweetRow = document.createElement("tr");
	tweetRow.setAttribute("class","tweetRowClass");
  var iconCell = document.createElement("td");
  iconCell.setAttribute("class", "icon");
  var icon = document.createElement("img");
  icon.src = iconUrl;
	icon.setAttribute("class","imgClass");
  icon.setAttribute("alt", user);
  icon.setAttribute("height", 48);
  icon.setAttribute("width", 48);
  iconCell.appendChild(icon);
  tweetRow.appendChild(iconCell);
  var tweetCell = document.createElement("td");
  tweetCell.setAttribute("class", "tweet");
  tweetCell.appendChild(document.createTextNode(user + ": " + tweet));
  tweetRow.appendChild(tweetCell);

  return tweetRow;
}
