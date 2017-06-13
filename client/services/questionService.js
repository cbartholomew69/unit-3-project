QuestionService.$inject = ['$http']

function QuestionService($http) {
    var self = this;

    self.getAllQuestionsByStudyGuideId = function (userIdForQuestion, studyGuideId) {
        return $http.get('/users/' + userIdForQuestion + '/studyGuide/' + studyGuideId + '/questions')
            .then(function (response) {
                console.log(userIdForQuestion);
                console.log("eweweweweweewewewewewewewew",response.data);
                return response;
            });
    }

    self.addNewQuestion = function (userIdForStudyGuide, studyGuideId, newStudyGuide) {
        console.log('youre in the newQuestion Service');
        return $http.post('/users/' + userIdForStudyGuide + '/studyGuide/' + studyGuideId + '/questions', newStudyGuide);
    }
    // self.getSingleStudyGuideById = function (studyGuideIdToShow) {
    //     return $http.get('users/studyGuides/' + studyGuideIdToShow)
    // }

    // self.updateSingleStudyGuide = function (studyGuideToUpdate) {
    //     return $http.patch('studyGuides/', studyGuideToUpdate);
    // }

    // self.deleteIdFromDatabase = function (studyGuideIdToDeleteFromDatabase) {
    //     return $http.delete('studyGuides/' + studyGuideIdToDeleteFromDatabase);
    // }
}

angular
    .module('trivia-trainer')
    .service('QuestionService', QuestionService);
