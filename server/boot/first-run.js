module.exports = function(app) {
  const user = app.models.user;
  user.create(
    { username: "admin", email: "admin@admin.ru", password: "admin" },
    function(err, userInstance) {
      console.log(userInstance);
    }
  );
};
