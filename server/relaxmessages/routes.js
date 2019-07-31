const express = require("express");
const relaxMessage = require("./model.js");
const router = express.Router();

router.post("/relaxmessages", function(req, res, next) {
  console.log("relaxmessage post ", req.body);
  const relaxmessage = {
    text: req.body.id.text,
  };

  console.log("try to create", relaxmessage);
  relaxMessage.create(relaxmessage)
    .then(relaxmessage => res.status(201).json(relaxmessage))
    .catch(err => {
      next(err);
    });
});

router.get("/relaxmessages", (req, res, next) => {
  console.log("hello from GET relaxmessages", req.params.id);

  relaxMessage.findAll()
    .then(relaxmessage => {
      res.status(200).send(relaxmessage);
    })
    .catch(next);
});

router.delete("/relaxmessages", function(req, res, next) {
  relaxMessage.destroy({
    where: { text: req.body.text }
  })
    .then(relaxmessage => {
      res.json({ relaxmessage: relaxmessage });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
