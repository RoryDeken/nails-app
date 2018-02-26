// Place JS here.
var previewer = new Vue({
  el: "#previewer",
  data: {
          loading: true,
          collection: 0,
          nailLength: -15,
          hand:0,
          skin:1,
          shape: 0,
          color: '#ebcec0'},

    computed: {
        skin: function(){
          return this.skin;
    }
  },
  mounted: function(){
    setTimeout(function(){
      previewer.loading = false;
    }, 1000);
  }
});
