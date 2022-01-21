const User = require('../models/users');
module.exports.profile = function(req, res) {
    res.end('<h1>user profile</h1>');
}


//render the signup page

module.exports.signup = function(req, res) {
    return res.render('user_sign_up', {
        title: "social | sign up"
    });
}


module.exports.signin = function(req, res) {
    return res.render('user_sign_in', {
        title: "social | sign in"
    });
}

// get the sign up data
module.exports.create = function(req, res) {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({
            email: req.body.email
        }),
        function(err, user) {
            if (err) {
                console.log('error in finding user in signing up');
                return
            }
            if (!User) {
                User.create(req.body, function(err, user) {
                    if (err) {
                        console.log('error in creating user while siging up');
                        return

                    }
                    return res.redirect('/users/sign-in');
                })
            } else {
                return res.redirect('back');
            }
        }
}


//sign in  and create a session for the user
module.exports.createSession = function(req, res) {
    // ToDo later
}