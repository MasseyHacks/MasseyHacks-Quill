'use strict';
var User = require('../app/server/models/User');
/**
 * Make any changes you need to make to the database here
 */
exports.up = function up (done) {
 	this('User').find(function(error, users){
 		users.forEach(function(user){
 			user.status.rejected = false;
 			user.save();
 		})
 		done();
 	});
};

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  this('User').update({}, {$unset: {id: 1 }}, function(){
    done();
  });
};
