import passport from 'passport';
import {Strategy as InstagramStrategy} from 'passport-instagram';

const config = {
  instagram: {
    clientID: process.env.INSTAGRAM_KEY,
    clientSecret: process.env.INSTAGRAM_SECRET,
    callbackURL: 'http://localhost:3000/auth/instagram/callback',
  },
};

export function setup() {
  passport.serializeUser((user, done) => {
    done(null, {id: user.id, token: user.token});
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new InstagramStrategy(config.instagram,
    (token, tokenSecret, profile, done) => {
      done(null, Object.assign({}, profile, {token}));
    }
  ));
}
