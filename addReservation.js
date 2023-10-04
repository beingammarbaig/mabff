const express = require("express");
const router = express.Router();
const Reservation = require("./reservation");

router.post("/reservation", async (req, res) => {
  try {
    await Reservation.create({
      date: req.body.date,
      time: req.body.time,
      partySize: req.body.partySize,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    // await user.create({
    //     name: "Ammar",
    //     pass: "1234"

    // })
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
