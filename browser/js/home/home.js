app.config(function ($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'js/home/home.html',
		resolve:{
			vendors: function(Vendors){
				console.log('getting vendors');
				return Vendors.getVendors().then(function(vend){
					vend.forEach(function(row){
						row.change = parseInt(row.change); 
					})
					return vend; 
				})
			},
			headings:function(Vendors){
				return Vendors.vendorHeadings(); 
			}
		},
		controller:'HomeCtrl'
	});
});

app.controller('HomeCtrl', function($scope, vendors, headings){
	$scope.vendors= vendors;
	$scope.vendorHeadings= headings;
	$scope.orderByCol=""; 
	$scope.orderByUnfiltered; 
	$scope.setOrderBy=function(col){
		$scope.orderByUnfiltered=col; 
		switch(col.toLowerCase()){
			case "30-day":
			$scope.orderByCol="-change";
			break; 
			case "vendor":
			$scope.orderByCol="name";
			break;
			case "percentile":
			$scope.orderByCol="-"+col.toLowerCase()
			break; 
			default:
			$scope.orderByCol=col.toLowerCase(); 
			break; 
		}
	};
});