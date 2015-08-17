var getSpeed = require('./');

getSpeed(function (err, speed) {
  if (err) throw err;
  console.log('Wi-Fi Speed : ', speed);
});
