const path = require('path');
const router = require('express').Router();

router.get(
  '/.well-known/pki-validation/3F005EF50CBA24C5836A32ABC5CA9E59.txt',
  (req, res, next) => {
    res.send(
      '036416679B0B4CD572D7BE08B6B81081061B1C9F880422269FF9127F759B2177 comodoca.com 5e290296010ca'
    );
  }
);

router.get('/*', (req, res, next) => {
  const routePath = path.join(
    __dirname + '..',
    '..',
    '..',
    'dist/' + 'index.html'
  );
  res.sendFile(routePath);
});

module.exports = router;
