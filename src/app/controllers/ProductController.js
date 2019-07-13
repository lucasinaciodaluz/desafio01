const products = [
  {
    id: 1,
    code: 1,
    description: 'Processador AMD 7ª Geração A / série Athlon',
    barCode: 1,
    price: 369.9,
  },
  {
    id: 2,
    code: 2,
    description: 'Fonte EVGA 500W 80 Plus White 100-W1-0500-KR',
    barCode: 1,
    price: 244.9,
  },
];

class ProductController {
  list(req, res) {
    res.status(200).send(products);
  }

  create(req, res) {
    products.push(req.body);
    res.sendStatus(201);
  }
}

module.exports = new ProductController();
