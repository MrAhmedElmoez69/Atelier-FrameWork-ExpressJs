const express = require("express");
const router = express.Router();
const os = require("os");

router.get("/", (req, res, next) => {

    res.json({
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform(),
    });
})

router.get("/cpus", (req, res, next) => {
    res.json(os.cpus());
})

router.get("/os/cpus/:id", (req, res, next) => {
    const { id } = req.params;
    res.json(os.cpus()[id]);
})




module.exports = router;
