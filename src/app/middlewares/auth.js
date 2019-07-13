const auth = require('basic-auth');

module.exports = (req, res, next) => {
  const { name, pass } = auth(req);
  if (name === 'admin' && pass === '1234') {
    return next();
  }
  return res.status(400).send('Usuário não autorizado');
};
