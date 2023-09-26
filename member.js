function skillsMember(){
    return{
        restrict: 'E',
        templateUrl : 'modules/skiils/views/men=mber.html',
        controller : 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}