
ShowUserController.$inject = ['$state', '$stateParams', 'UsersService']

function ShowUserController($state, $stateParams, UsersService) {

    var vm = this;

    function initialize() {
        const userId = $stateParams.userId;

        UsersService.getSingleUserById(userId)
            .then(
                function success(response) {
                    vm.userEntry = response.data;
                },
                function failure(response) {
                    console.log('Failed to retrieve information for User with ID of ' + userId)
                }
            )
    }
    initialize();

    // vm.editUserEntry = function (userEntryId) {
    //     $state.go('edit_user/:userId', { userId: userEntryId });
    // }
}

module.exports = ShowUserController;
