// Place JS here.
var previewer = new Vue({
  el: "#previewer",
  data: {
    skins: ['http://via.placeholder.com/500x500','http://via.placeholder.com/300x300'],
    collections:
        [ //nailLength
            [ //shape array
              [ // size array
                ["http://via.placeholder.com/350x150", "http://via.placeholder.com/550x150"] // colors
              ]
            ] //end shapeOne
        ],// end collections

        values: {
          collection: 0,
          nailLength: 0,
          skin:0,
          shape: 0,
          color: 0},
  },
    computed: {
      url: function(){
        nail = this.collections[this.values.collection][this.values.nailLength][this.values.shape][this.values.color] ? this.collections[this.values.collection][this.values.nailLength][this.values.shape][this.values.color] : nail;
        console.log(nail);
        return nail;
      },
      skin: function(){
        hand = this.skins[this.values.skin];

        return hand;
      }

    }
});
