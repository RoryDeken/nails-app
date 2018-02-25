// Place JS here.
var previewer = new Vue({
  el: "#previewer",
  data: {
    hand: '../dist/img/hand.png',
    collections:
        [ //nailLength
            [ //shape array
              [ // size array
                ["http://via.placeholder.com/350x150", "http://via.placeholder.com/550x150"]
              ]
            ] //end shapeOne
        ],// end collections

        values: {
          collection: 0,
          nailLength: -15,
          hand:0,
          skin:1,
          shape: 0,
          color: '#ebcec0'},
  },
    computed: {

      /*
      url: function(){
      //  nail = this.collections[this.values.collection][this.values.nailLength][this.values.shape][this.values.color] ? this.collections[this.values.collection][this.values.nailLength][this.values.shape][this.values.color] : nail;
        console.log(nail);
        return nail;
      },
      skin: function(){
        hand = this.hands[this.values.hand];

        return hand;
      }
      */
    }
});
