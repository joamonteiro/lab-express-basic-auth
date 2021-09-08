const router = require("express").Router();

function requireLogin(req, res, next) {
    if(req.session.currentUser) {
        next();
    } else {
        res.redirect("/login")
    }
}

router.get("/private", requireLogin, (req, res) => {
    res.render("private");
});

module.exports = router;