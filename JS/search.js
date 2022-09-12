let selection = JSON.parse(localStorage.getItem("movieData"));
  let searchVueObj = new Vue({
    el:'#moviePage',
    data:selection,
    methods:{
      searchMovie(var2){
        window.location = "http://127.0.0.1:5500/HTML/search.html";
        let searchArr = [];
        this.data.forEach(element => {
          if(element == var2){
            search = element;
            searchArr.push(search);
            console.log(searchArr);
          }
        })
      },
    }
  });