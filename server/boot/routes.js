module.exports = function(app) {
  app.post("/api/login", function(req, res) {
    app.models.user.login(
      {
        username: req.body.username,
        password: req.body.password
      },
      function(err, token) {
        if (err) {
          return res.json({
            error: err
          });
        }

        res.json({
          token: token.id
        });
      }
    );
  });
};
