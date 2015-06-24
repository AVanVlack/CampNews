angular.module('campNews', [])
  .controller('NewsController', ['$http', function($http) {
    var news = this;
    news.sort = 'all'
    url = 'http://www.freecodecamp.com/stories/hotStories';
    

	$http.get(url).success(function(data){
		console.log(data)
		news.newsData = data;
	})

	news.photo = function(art){
		if(art.image === ""){
			return art.author.picture
		} else {
			return art.image
		}
	}
	news.description = function(art){
		if (art.description === ""){
			return art.metaDescription
		}else {
			return art.description
		}
	}
	news.campLink = function(text){
		var endText = text.replace(" ", "-")
		var linkURL = 'http://www.freecodecamp.com/news/'
		return linkURL + endText;
	}

 	
  }]);
