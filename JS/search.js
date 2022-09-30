window.onload = function() {
  document.getElementById("searchInp").focus();
}
let selection = JSON.parse(localStorage.getItem("movieData"));
let searchArr = [];
let playArr = [];
  let searchVueObj = new Vue({
    el:'#searchGrid',
    data:selection,
    methods:{
      searchMovie(){
        let input = document.getElementById("searchInp").value.toLowerCase();
        this.data.forEach(element => {
          let searchResult = document.querySelector(".searchBlock");
          if(element.name.toLowerCase() == input){
            let search = element.name;
            searchArr.push(search);
            localStorage.setItem("searchHist",JSON.stringify(searchArr));
            document.getElementById("searchResult").src = element.image;
            searchResult.style.display = "block";       
          };
        })
      },
      play(var3){
        this.data.forEach(element => {
          let playBlock = this.data.indexOf(element);
          let playIcon =document.querySelector("#resultGrid").children[playBlock].children[0].children[2].children[0];
          let removeCard = document.querySelector("#resultGrid").children[playBlock].children[0].children[0];
          let showNA = document.querySelector("#resultGrid").children[playBlock].children[0].children[1];
          let vid = document.querySelector("#resultGrid").children[playBlock].children[0].children[1];
          if(element == var3 && playIcon.style.color == ''){
            choice = element;
            playArr.push(choice);
            localStorage.setItem("playedMovies", JSON.stringify(playArr));
            playIcon.style.color = "green";
            removeCard.style.display = "none";
            showNA.style.display = "initial";
            vid.autoplay = true;
            vid.load();
          }else{
            playIcon.style.color = '';
            removeCard.style.display = "initial";
            showNA.style.display = "none";
            vid.autoplay = false;
            vid.load();
          };
        });
      },
    },
  })

  
