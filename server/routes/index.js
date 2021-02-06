const path = require('path');
const router = require('express').Router();

router.get(
  '/.well-known/pki-validation/45C5AE6C553FD9046AAA942D28FE3C2C.txt',
  (req, res, next) => {
    res.send(
      '7668505E1E7C5870418C71ABB85895EC3E0D2B4BED7AE01E7041572DC51ED0AC comodoca.com 601eb67f0edf6'
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
