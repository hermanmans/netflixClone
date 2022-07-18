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

////// Vue instance

let vueObj = new Vue({
  el:"#myApp",
  data:{
     state:"default",
     newItem: "",
     myList:[{label:"Walk the dog",done:false},
              {label:"Walk the cat",done:true}]
  },
  methods:{
      saveItem(){
          this.myList.push({label:this.newItem,done:false});
          this.newItem = ""; // This clears the input area after the submit or save button is pressed.
      },

      changeState(newState){// Toggle "Edit" and "Add Items" button
          this.state = newState;
      },

      toggleStrike(x){
          x.done = !x.done;
      },
  },
  computed:{
      reverseItems(){
          return this.myList.slice(0).reverse(); //make copy of "myList" and reverse the order. Display will have to be updated in the list item.
      }
  }
})