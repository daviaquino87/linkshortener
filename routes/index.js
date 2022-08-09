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
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz0123456789';
  for(let i = 0 ; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;  
}


module.exports = router;
