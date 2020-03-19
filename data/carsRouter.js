const express = require('express');

const db = require('../data/connection.js');

const router = express.Router();


router.get("/", (req, res) => {
    db("cars")
      .then(cars => {
        res.json(cars);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve Cars" });
      });
  });


router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    db("cars")
      .where({ id })
      .first()
      .then(car => {
        res.json(car);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve car data!" });
      });
  });

router.post("/", (req, res) => {
    const carData = req.body;
    db("cars")
      .insert(carData, "id")
      .then(ids => {
        db("cars")
          .where({ id: ids[0] })
          .then(newCarEntry => {
            res.status(201).json(newCarEntry);
          });
      })
      .catch(err => {
        console.log("POST error", err);
        res.status(500).json({ message: "Failed to store car data!" });
      });
  });

module.exports = router;