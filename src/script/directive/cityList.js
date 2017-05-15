angular.module("app").directive("cityList",[function(){
	return{
		restrict:"E",
		templateUrl:"view/template/cityList.html",
		replace:true,
		scope:{
			isShow:"=",
			data:"="
		},
		controller:["$scope",function($scope){
			$scope.changecity=function(num){
				$scope.$emit("cityid",num)
				$scope.isShow=false
			}
		}]
	}
}])