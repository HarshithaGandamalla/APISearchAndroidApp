
function searchTweets(){
	var keyword = document.getElementById("keywordTextbox").value;
	localStorage.setItem("KEY",keyword);
	window.location.href="./searchResult.html";

}
