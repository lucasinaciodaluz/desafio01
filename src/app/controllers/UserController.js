const users = [{ id: 1, code: 2 }, { id: 2, code: 1 }];

class UserController {
  list(req, res) {
    res.send(users);
  }

  create(req, res) {
    users.push(req.body);
    res.sendStatus(201);
  }
}

module.exports = new UserController();
