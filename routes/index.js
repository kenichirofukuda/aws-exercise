
var images = [
  'http://chal-bucket.s3-website-ap-northeast-1.amazonaws.com/g.png',
  'http://chal-bucket.s3-website-ap-northeast-1.amazonaws.com/c.png',
  'http://chal-bucket.s3-website-ap-northeast-1.amazonaws.com/p.png',
];


/* GET home page. */
module.exports = function(req, res) {
  res.render('index', { title: 'Rock-Paper-Scissors', image: images[Math.floor(Math.random() * images.length)] });
};

