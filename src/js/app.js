// Place JS here.
var previewer = new Vue({
  el: "#previewer",
  data: {
      name:'Gel Polish - 81',
      colorLink: 'https://www.lovecandycoat.com/products/candy-coat-081?variant=33482690058',
      family: 'Blues',
        fakeHands: [
      './dist/img/fake.png',
      './dist/img/fake.png',
      './dist/img/fake.png',
      './dist/img/fake.png',
      './dist/img/fake.png',
        ],
        realHands: [
      './dist/img/2.png',
      './dist/img/3.png',
      './dist/img/4.png',
      './dist/img/5.png',
      './dist/img/6.png',
        ],
        realColors: [
          './dist/img/colors/001.png',
          './dist/img/colors/002.png',
          './dist/img/colors/003.png',
          './dist/img/colors/004.png',
          './dist/img/colors/005.png',
          './dist/img/colors/006.png',
          './dist/img/colors/007.png',
          './dist/img/colors/008.png',
          './dist/img/colors/009.png',
          './dist/img/colors/010.png'
        ],
        fakeColors: [
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png'

        ],
        fakeControls: [
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png'
        ],
        realControls: [
          './dist/img/shapes/stiletto.png',
          './dist/img/shapes/almond.png',
          './dist/img/shapes/ballerina.png',
          './dist/img/shapes/oval.png',
          './dist/img/shapes/round.png',
          './dist/img/shapes/square.png'
        ],
          loading: true,
          collection: 0,
          nailLength: -681,
          hand:0,
          skin:1,
          shape: 0,
          color: 'rgba(79, 102, 165, 0.85)'

        },
     computed: {
        skin: function(){
          return this.skin;
    },
    previewColor: function(){
      return this.color;
    }

  },
  methods: {
    fakeHand: function (index) {
      return this.fakeHands[index];
    },
    fakeColor: function (index) {
      return this.fakeColors[index];
    },
    fakeControl: function (index) {
      return this.fakeControls[index];
    }
  },
  created: function(){
    var url = window.location.href;
    console.log('Vue instance created, href is ' + url);
  },
  mounted: function(){
    setTimeout(function(){
      previewer.loading = false;
    }, 4000);
    setTimeout(function(){
      console.log('replacing hands');
      for(i=0; i < previewer.fakeHands.length; i++){
        previewer.fakeHands[i] = previewer.realHands[i];
      }
    }, 0);
    setTimeout(function(){
      console.log('replacingcontrols');
      for(i=0; i < previewer.fakeControls.length; i++){
        Vue.set(previewer.fakeControls, i, previewer.realControls[i]);
      }

    }, 3000);
    setTimeout(function(){
      console.log('replacingcontrols');
      for(i=0; i < previewer.fakeColors.length; i++){
        Vue.set(previewer.fakeColors, i, previewer.realColors[i]);
      }

    }, 3500);
  },
});
