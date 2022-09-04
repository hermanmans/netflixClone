let selection = JSON.parse(localStorage.getItem("movieData"));
  let searchVueObj = new Vue({
    el:'#searchGrid',
    data:selection,
    methods:{
      searchMovie(var2){
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