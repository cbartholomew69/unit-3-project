let usersTemplate = require(__dirname + '/users.html');
let usersController = require(__dirname + '/users.controller.js');

let UsersComponent = {
    template: usersTemplate,
    controller: usersController
}

angular.module('unit-3-project').component('users', UsersComponent);