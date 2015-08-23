app.filter('decToPercent',function($filter){
	return function(dec){
		return $filter('number')(+dec*100,0)+"%"; 
	};
});

app.filter('percentageChange',function($filter){
	return function(input){
		if(+input>0){
			return "+"+input+"%"; 
		}
		return input+"%"; 
	};
});

