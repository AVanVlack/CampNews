angular.module('campNews', [])
  .controller('NewsController', ['$http', function($http) {
    var news = this;
    news.sort = 'all'
    url = 'http://www.freecodecamp.com/stories/hotStories';
    
    news.online = function(boo) {
    	if (boo) {
    		return "Online"
    	}
    	else {return "Offline"}
    }

	$http.get(url).success(function(data){
		console.log(data)
		news.newsData = data;
;	})

	news.photo = function(art){
		if(art.image === ""){
			return art.author.picture
		} else {
			return art.image
		}
	}

	news.commentLink = function(text){
		var endText = text.replace(" ", "-")
		var url = 'http://www.freecodecamp.com/news/'
		return url + endText;
	}
 	
  }]);
