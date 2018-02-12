// Place JS here.
var previewer = new Vue({
  el: "#previewer",
  data: {
    url: "http://placehold.it/500x750",
    collections: {
        collectionOne: {
          skinOne: {
            shapeOne: {
              sizeOne: {
                colors: ["url1", "url2"]
              } //end sizeOne
            } //end shapeOne
          } //end skinOne
        } // end collectionOne
      } //end collections
    
  }
});
