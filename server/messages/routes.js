const express = require("express");
const Message = require("./model.js");
const router = express.Router();

router.post("/messages", function(req, res, next) {
  console.log("message post ", req.body);
  const message = {
    text: req.body.id.text,
  };

  console.log("try to create", message);
  Message.create(message)
    .then(message => res.status(201).json(message))
    .catch(err => {
      next(err);
    });
});

router.get("/messages", (req, res, next) => {
  console.log("hello from GET messages", req.params.id);

  Message.findAll()
    .then(message => {
      res.status(200).send(message);
    })
    .catch(next);
});

router.delete("/messages", function(req, res, next) {
  Message.destroy({
    where: { text: req.body.text }
  })
    .then(message => {
      res.json({ message: message });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
