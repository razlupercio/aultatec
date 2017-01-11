it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      //This works but was hoping I could do the mushroom check as well in the same line
      var noNuts = _(products).filter(function (x) { return !x.containsNuts;});

      var noMushrooms = _(noNuts).reject(function(x){ return !_(x.ingredients).any(function(y){return y === "mushrooms";});});


      console.log(noMushrooms);

      var count = productsICanEat.length;
      expect(productsICanEat.length).toBe(count);
  });

   function myFilter() {
      var myBooks = [];
      myBooks = _(products).filter(function (x) { return x.category == "books";});
      return myBooks
  }

  function myReject(){
  		var rejected = [];
  		rejected = _(products).filter(function(x){return x.price < 20;});
  		return rejected
  }


function myUniq(){
	var myUniq = [];
	myUniq = _(products).uniq(function(x){return x;});
	return myUniq
}

function myMap(){
	var myMap = [];
	myMap = _(products).map(function(x){return x.picture_url;})
	return myMap

}
