const express = require("express");
const router = express.Router();

const { Analytic } = require("../models/Analytic");

// @route GET api/analytics
// @desc GET All Analytics
// @access Public
router.get("/", (req, res) => {
  const findByUrl = req.query.websiteUrl
    ? { websiteUrl: req.query.websiteUrl }
    : {};

  const findByDate =
    req.query.minDate && req.query.maxDate
      ? {
          collectedAt: {
            $gte: new Date(req.query.minDate),
            $lt: new Date(req.query.maxDate),
          },
        }
      : {};

  Analytic.find(findByUrl)
    .find(findByDate)
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route GET api/analytics/websiteUrls
// @asc GET All Analytic WebsiteUrls
// @access Public
router.get("/websiteUrls", (req, res) => {
  Analytic.find().distinct("websiteUrl", (error, websiteUrls) => {
    res.json(websiteUrls);
  });
});

// @route POST api/analytics
// @desc Create an Analytic
// @access Public
router.post("/", async (req, res) => {
  try {
    const newAnalytic = new Analytic({
      websiteUrl: req.body.websiteUrl,
      collectedAt: req.body.collectedAt,
      ttfb: req.body.ttfb ? req.body.ttfb : 0,
      fcp: req.body.fcp ? req.body.fcp : 0,
      domLoad: req.body.domLoad ? req.body.domLoad : 0,
      windowLoad: req.body.windowLoad ? req.body.windowLoad : 0,
      networkTimings: req.body.networkTimings,
    });
    const savedAnalytic = await newAnalytic.save();
    res.status(200).json(savedAnalytic);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
