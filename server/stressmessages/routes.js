const express = require("express");
const stressMessage = require("./model.js");
const router = express.Router();

router.post("/stressmessages", function(req, res, next) {
  console.log("stressmessage post ", req.body);
  const stressmessage = {
    text: req.body.id.text,
  };

  console.log("try to create", stressmessage);
  stressMessage.create(stressmessage)
    .then(stressmessage => res.status(201).json(stressmessage))
    .catch(err => {
      next(err);
    });
});

router.get("/stressmessages", (req, res, next) => {
  console.log("hello from GET stressmessages", req.params.id);

  stressMessage.findAll()
    .then(stressmessage => {
      res.status(200).send(stressmessage);
    })
    .catch(next);
});

router.delete("/stressmessages", function(req, res, next) {
  stressMessage.destroy({
    where: { text: req.body.text }
  })
    .then(stressmessage => {
      res.json({ stressmessage: stressmessage });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
