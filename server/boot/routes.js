'use strict';

module.exports = function(app) {
  app.post('/api/login', function(req, res) {
    app.models.user.login(
      {
        username: req.body.username,
        password: req.body.password,
      },
      function(err, token) {
        if (err) {
          return res.json({
            error: err,
          });
        }

        res.json({
          token: token.id,
        });
      }
    );
  });

  app.get('/api/logout', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401); // return 401:unauthorized if accessToken is not present
    app.models.user.logout(req.accessToken.id, function(err) {
      if (err) return next(err);
      res.end();
    });
  });
};
