const express = require('express')
const router = express.Router()

//Item Model
const {Analytic} = require('../models/Analytic')

// @route GET api/items
// @desc GET All Items
// @access Public
router.get('/',(req,res)=>{
    Analytic.find()
    .sort({date:-1})
    .then(items=>res.json(items))
})

// @route POST api/items
// @desc Create an item
// @access Public
router.post('/',(req,res)=>{
   const newAnalytic = new Analytic({
                                                            //Analytic objesi düzgün çağırılmadığında boş elemanlar kaydediyor --- fazladan json gönderirsek eklemiyor(doğruOlan) 
                                                            //buradaki reqleri teker teker vermezsek daha güzel?
                                                            //string olan bi alan yerine sayı verirsek onu alıp string olarak kaydediyor yine de?
                                                            //beklenen alan gelmediğinde hata veriyor onu uygun http ile geri döndür!
    websiteUrl:req.body.websiteUrl,
    collectedAt:req.body.collectedAt,
    ttfb:req.body.ttfb,
    fcp:req.body.fcp ? req.body.fcp : 0,
    domLoad:req.body.domLoad,
    windowLoad:req.body.windowLoad,
    networkTimings:req.body.networkTimings,
   })
   newAnalytic.save().then(analytic=>res.json(analytic)) 
})

// @route DELETE api/items
// @desc Delete an item
// @access Public
router.delete('/:id',(req,res)=>{
    Analytic.findById(req.params.id)
    .then(analytic=>analytic.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}))
 })

module.exports = router