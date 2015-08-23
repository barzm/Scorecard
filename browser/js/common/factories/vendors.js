app.factory('Vendors', function($http){
	return{
		getVendors:function(){
			return $http.get('/vendors')
			.then(function(response){
				return response.data.vendors; 
			})
			.catch(function(err){
				console.log("Error in Factory Vendors.getVendors ",err); 
			});
		},
		vendorHeadings:function(){
			return ['','Score','Percentile','30-Day','Vendor','Industry']; 
		}

	}
});