var UserController = require ('../database/User/UserController.js');
module.exports = function (app, express) {
/*								user route									 */
//=============================================================================
		app.post('/api/signup',UserController.signupUser);
		app.post('/api/:username', UserController.getuserByUserName);
		// app.get('/profile',function (req,res) {
		// 	res.render('../../client/app/component/profile/profile')
		// })
};

