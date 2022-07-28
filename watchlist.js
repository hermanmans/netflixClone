let showList = JSON.parse(localStorage.getItem('toWatch'));
console.log(showList);
let newWatchObj = new Vue({
    el:'#watchGrid',
    data:showList,
  });

  console.log(showList);