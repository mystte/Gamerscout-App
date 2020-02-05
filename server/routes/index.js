const path = require('path');
const router = require('express').Router();

router.get(
  '/.well-known/pki-validation/4692FC9AF913B6E25BAFFA9C5B33ADF8.txt',
  (req, res, next) => {
    res.send(
      '70CB24D622CCB84FAC8F6EEA6883DFB15A1092C48AEF1081BB039587C1E7B4A6 comodoca.com 5e2c4b0c2108e'
    );
  }
);

router.get(
  '/.well-known/pki-validation/F4D80C696A4902B6E202A466C9E5BA18.txt',
  (req, res, next) => {
    res.send(
      'AFFD57E888B584FC827F8356DC2156B77D1F6324139C9CF260144C663B8BE2F4 comodoca.com 5e3a032fed0c9'
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
