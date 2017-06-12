StudyGuidesController.$inject = ['$http', '$state', '$stateParams', 'StudyGuidesService', '$scope'];

function StudyGuidesController($http, $state, $stateParams, StudyGuidesService, $scope) {

    let vm = this;
    let userIdForStudyGuide = $stateParams.userId;

    function initialize() {

        console.log(userIdForStudyGuide);

        // StudyGuidesService.getSingleStudyGuideById(userIdForStudyGuide)
        //     .then(
        //     function success(response) {
        //         vm.studyGuideEntry = response.data;

        //     },
        //     function failure(response) {
        //         console.log('Failed to retrieve information for User with ID of ' + userIdForStudyGuide)
        //     }
        //     )
    }
    initialize();

    // getAllStudyGuides();

    // function getAllStudyGuides() {
    //     StudyGuidesService.getAllStudyGuides()
    //         .then(
    //         function success(response) {
    //             // if the call is successful, return the list of study guides
    //             vm.studyGuideEntries = response.data;
    //         },
    //         function failure(response) {
    //             console.log('Error retrieving Study Guide Entries from database!');
    //         }
    //         );
    // }

    // This function handles our form submission.

    vm.addNewStudyGuide = function () {

        // the new User object will be created by binding to the form inputs
        const newStudyGuide = {
            title: vm.newStudyGuideTitle,
        };

        // this function can be used to clear the shows form
        function resetForm() {
            vm.newStudyGuide = '';

        }
        // Make an ajax call to save the new User to the database:
        StudyGuidesService.addNewStudyGuide(userIdForStudyGuide, newStudyGuide)
            .then(
            function success(response) {
                // only push to the userEntries array if the ajax call is successful
                const newStudyGuide = response.data;
                // vm.userEntries.push(newStudyGuide);
                console.log(newStudyGuide);
                // then reset the form so we can submit more users
                resetForm();

            },
            function failure(response) {
                // if the http call is not successful, log the error
                // DO NOT clear the form
                // DO NOT push the new object to the array
                console.log('Error saving new Study Guide to database!');
            });
    };


    // vm.showStudyGuide = function (userId) {
    //     $state.go('study_guide/:userId', { userId: userId });
    // }
}

module.exports = StudyGuidesController;