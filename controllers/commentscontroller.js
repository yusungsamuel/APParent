var db = require("../models")

module.exports = {
    findAllForPost: function (req, res) {
        if (req.isAuthenticated()) {
            db.comments.findAll({
                where: {
                    postId: req.params.id
                }
            })
                .then(function (result) {
                    res.json(result)
                });
        }
    },
    create: function (req, res) {
        if (req.isAuthenticated()) {
            db.comment.create({
                description: req.body.description, 
                postId: req.body.postId, 
                //change it to passport once we set it up 
                parentId: req.session.passport.user.id
                //req.body.parentId
            }).then(function (result) {
                res.json(result)
            })
        }
    }

    //can add remove comment function as a stretch goal
}