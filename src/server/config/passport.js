import passport from 'passport';
import {Strategy as TwitterStrategy} from 'passport-twitter';
import {Strategy as InstagramStrategy} from 'passport-instagram';
import axios from 'axios';

const config = {
  twitter: {
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: 'http://localhost:3000/auth/twitter/callback',
  },
  instagram: {
    clientID: process.env.INSTAGRAM_KEY,
    clientSecret: process.env.INSTAGRAM_SECRET,
    callbackURL: 'http://localhost:3000/auth/instagram/callback',
  },
};

export function setup() {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((userId, done) => {
    done(null, userId);
  });

  passport.use(new TwitterStrategy(config.twitter,
    (token, tokenSecret, profile, done) => {
      done(null, profile);
    }
  ));

  passport.use(new InstagramStrategy(config.instagram,
    (token, tokenSecret, profile, done) => {
      const params = {
        access_token: token,
        // lat: 35.319759,
        // lng: 139.547703,
      };
      axios.get('https://api.instagram.com/v1/locations/213046462', {params}).then(({data}) => {
        console.log(data);
      }).catch(err => {
        console.log(err, err);
      });

      done(null, profile);
    }
  ));
}
