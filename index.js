var proc = require('child_process');

var OSX_AIRPORT = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I';

function getSpeed(cb){
	if (process.platform !== 'darwin') throw new Error('Works only on OSX');

	proc.exec(OSX_AIRPORT, function (err, stdout){
		if (err) cb(err);

	    var lines = stdout.split('\n');
	    var filter = lines.filter(function (line) {
	    	return line.indexOf('maxRate') !== -1;
      	});
	    var speed = filter[0].substr(filter[0].indexOf(':') + 1) + 'Mb/s';

	    cb(null, speed);
	});
}

module.exports = getSpeed;