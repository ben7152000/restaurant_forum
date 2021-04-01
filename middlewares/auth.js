const passport = require('../config/passport')

const passportCheck = (req, res, next) => {
  passport.authenticate('local',
    {
      failureRedirect: '/signin',
      failureFlash: true
    })
  next()
}

module.exports = { passportCheck }
