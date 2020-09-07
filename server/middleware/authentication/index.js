const passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy,
  jwt = require('jsonwebtoken'),
  ExtractJwt = require('passport-jwt').ExtractJwt,
  User = require('../../db/models/user');

let jwtOptions = {
  jwtFromRequest: (req) => {
    // all backend routes have a /api prefix
    // therefore we know if it doesn't, this is a frontend route
    if (!req.url.includes('/api')) {
      const token = jwt.sign({ react_app: true }, process.env.JWT_SECRET);
      return token;
    }

    return req?.cookies?.jwt || ExtractJwt.fromAuthHeaderWithScheme('jwt')(req);
  },
  secretOrKey: process.env.JWT_SECRET
};

passport.use(
  'jwt',
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    // rachet fix for current deployment implementation
    // we just mock a user for the time being
    // this is temporary and should be removed
    // when a more ideal solution is found
    if (jwtPayload.react_app) {
      return done(null, true);
    }

    if (Date.now() > jwtPayload.expires) {
      return done(null, false, { message: 'jwt expired' });
    }
    let { iat, exp, ...userData } = jwtPayload;
    userData = await User.findById(userData._id);
    return done(null, userData);
  })
);

module.exports = passport;
