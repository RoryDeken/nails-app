// Place JS here.
var previewer = new Vue({
  el: "#previewer",
  data: {
    fakeUrls: [

          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png',
          './dist/img/fake.png'
        ],
          realUrls:  [

                    './dist/img/2.png',
                    './dist/img/3.png',
                    './dist/img/4.png',
                    './dist/img/5.png',
                    './dist/img/6.png',
                  ],
          loading: true,
          collection: 0,
          nailLength: -15,
          hand:0,
          skin:1,
          shape: 0,
          color: '255, 195, 229',

        },

    computed: {
        skin: function(){
          return this.skin;
    }

  },
  methods: {
    fakeUrl: function (index) {
      return this.fakeUrls[index];
    }
  },
  mounted: function(){
    setTimeout(function(){
      previewer.loading = false;
    }, 3000);
    setTimeout(function(){
      console.log('replacing images');
      for(i=0; i < previewer.fakeUrls.length; i++){
        previewer.fakeUrls[i] = previewer.realUrls[i];
      }
    }, 5000);
  },
});
