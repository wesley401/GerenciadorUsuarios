module.exports = {
  user: (app, req, res) => {
    req.assert("_name", "O nome é obrigatorio").notEmpty();
    req.assert("_email", "O email esta invalido").notEmpty().isEmail();
    let erros = req.validationErrors();
    if (erros) {
      app.utils.error.send(erros, req, res);
      return false;
    } else {
      return true;
    }
  },
};
