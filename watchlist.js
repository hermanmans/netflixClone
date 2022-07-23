let watchObj =JSON.parse(localStorage.getItem('toWatch'));
let newWatchObj = new Vue({
    el:'#watchGrid',
    data:watchObj,
  });
  