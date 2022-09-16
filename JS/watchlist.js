let showList = JSON.parse(localStorage.getItem('toWatch'));
let newWatchObj = new Vue({
    el:'#watchGrid',
    data:showList,
    methods:{
      removeMovie(remove){
        this.$data.forEach(element => {
          if(element == remove){
            choice = element;
            let index = showList.indexOf(choice)
            showList.splice(index,1);
            localStorage.setItem("toWatch", JSON.stringify(showList));
            window.location.reload();
          };
        });
      },
    },
    computed:{
      sortedItems(){
        return this.$data.slice(0).reverse();
      },
    },
  });

