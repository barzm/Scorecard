app.directive('vendorListing', function($rootScope){
	return {
		restrict: 'A',
		scope:{
			info:'=',
			isChecked:'=ischecked',
			idx:'='
		},
		templateUrl: 'js/common/directives/vendor-listing/vendor-listing.html',
		link: function(scope, elem, attr) {
			scope.isChecked=false;
			scope.tellIsChecked=function(bool){
				$rootScope.$broadcast('selectedNew');
				scope.isChecked=bool;
			};
			scope.toggleChecked=function(){
				scope.isChecked=!(scope.isChecked); 
				scope.tellIsChecked(scope.isChecked); 
			}
			scope.$on('selectedNew',function(){
				scope.isChecked=false;  
			}); 
		}
	};
});