let showList = JSON.parse(localStorage.getItem('toWatch'));
let newWatchObj = new Vue({
    el:'#watchGrid',
    data:showList,
    methods:{
      removeMovie(remove){
        this.$data.forEach(element => {
          if(element == remove){
            choice = element;
            console.log(element);
            let newList = showList.splice(choice,1);
            localStorage.setItem("toWatch", JSON.stringify(newList));
          };
          console.log(showList);
        });
      },
    },
  });

