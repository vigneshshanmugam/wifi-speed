# wifi-speed
 
 Get the current Wi-Fi speed 

### Installation

```
npm install wifi-speed

```

### Usage

```js
var getSpeed = require('./');

getSpeed(function (err, speed) {
  if (err) throw err;
  console.log('Wi-Fi Speed : ', speed);
});
```

The output of the above code will be 

```
Wi-Fi Speed : 217Mb/s
```

