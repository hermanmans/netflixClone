let selection = JSON.parse(localStorage.getItem("movieData"));
let searchArr = [];
  let searchVueObj = new Vue({
    el:'#searchGrid',
    data:selection,
    methods:{
      searchMovie(){
        let input = document.getElementById("searchInp").value.toLowerCase();
        this.data.forEach(element => {
          if(element.name.toLowerCase() == input){
            search = element.name;
            searchArr.push(search);
            localStorage.setItem("searchHist",JSON.stringify(searchArr));
            document.getElementById("searchResult").src = element.image;
            document.querySelector(".searchBlock").style.display = "block";
          };
        })
      },
    }
  });
  
  
  
