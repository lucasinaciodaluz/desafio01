module.exports = (req, res, next) => {
  const { price } = req.body;
  if (price != null && price > 0) {
    return next();
  }
  return res.status(400).send('Verifique o valor do produto.');
};
