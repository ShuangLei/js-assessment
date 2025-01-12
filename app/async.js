exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	var deferred = $.Deferred();
  	setTimeout(function(){
  		deferred.resolve(value);
  	}, 0);
  	return deferred.promise();
  },

  manipulateRemoteData: function(url) {
  	var deferred = $.Deferred();
  	$.ajax(url).then(function(resp){
  		var people = $.map(resp.people, function(i){
  			return i.name;
  		});
  		deferred.resolve(people.sort());
  	});
  	return deferred.promise();
  }
};
