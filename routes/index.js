var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encurtador' });
});

router.post('/new', async(req,res,next) => {
  const url = req.body.url;
  const code = generateCode();

  res.send(`${process.env.DOMAIN}${code}`);
})

function generateCode(){
  let text = " ";
  const possibility = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz0123456789";
  for(i =0; i < 5; i++){
    text += possibility.charAt(Math.floor(Math.random() * possibility.length));
    return text;  
  }

}

module.exports = router;
