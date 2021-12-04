const express = require("express");
const router = express.Router();

//Item Model
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
router.post("/", (req, res) => {
  const newAnalytic = new Analytic({
    //Analytic objesi düzgün çağırılmadığında boş elemanlar kaydediyor --- fazladan json gönderirsek eklemiyor(doğruOlan)
    //buradaki reqleri teker teker vermezsek daha güzel?
    //string olan bi alan yerine sayı verirsek onu alıp string olarak kaydediyor yine de?
    //beklenen alan gelmediğinde hata veriyor onu uygun http ile geri döndür!
    websiteUrl: req.body.websiteUrl,
    collectedAt: req.body.collectedAt,
    ttfb: req.body.ttfb,
    fcp: req.body.fcp ? req.body.fcp : 0,
    domLoad: req.body.domLoad,
    windowLoad: req.body.windowLoad,
    networkTimings: req.body.networkTimings,
  });
  newAnalytic.save().then((analytic) => res.json(analytic));
});

module.exports = router;