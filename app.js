(function(angular) {
    var app = angular.module("bound1ess", []);
    
    app.service("Project", ["$rootScope", "$http", function($rootScope, $http) {
        var service = {
            projects: [],
        };

        $http.get("/projects.json")
            .success(function(projects) {
                service.projects = projects;

                $rootScope.$broadcast("projects.updated");
            })
            .error(function() {
                alert("Something went terribly wrong!");
            });

        return service;
    }]);

    app.controller("ProjectsController", ["$scope", "Project", function($scope, project) {
        $scope.$on("projects.updated", function() {
            $scope.projects = project.projects;
        });

        $scope.projects = project.projects;
    }]);

    app.controller("AboutController", ["$scope", "$http", function($scope, $http) {
        $scope.about = [];

        $http.get("/about.json")
            .success(function(facts) {
                $scope.about = facts;
            })
            .error(function() {
                alert("Something went terribly wrong!");
            });
    }]);
})(window.angular);
