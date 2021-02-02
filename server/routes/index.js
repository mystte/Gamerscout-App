const path = require('path');
const router = require('express').Router();

router.get(
  '/.well-known/pki-validation/E01CA2715945306933C22EFE68435398.txt',
  (req, res, next) => {
    res.send(
      '8E9841FF8BA6F3B0B6BE30AAA6504FA88C7B69BA5750C8BF73E95D002D8EB1D2 comodoca.com 6018c9137e7e8'
    );
  }
);

router.get('//riot.txt', (req, res, next) => {
  res.send('70576e4a-b6a7-4893-b666-d6fa9595fb8a');
});

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
