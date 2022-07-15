let searchPic = document.getElementById("search");
let searchBar = document.getElementById("searchInp");
function showBar(){
    if (searchBar.style.display === "none") {
        searchBar.style.display = "block";
      } else {
        searchBar.style.display = "none";
      }
}

searchPic.addEventListener("click",showBar);