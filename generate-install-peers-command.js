var fs = require('fs');

var packageFileContents = fs.readFileSync('./package.json', 'utf-8');
var packageObject = JSON.parse(packageFileContents);
var peerDependencies = packageObject.peerDependencies || {};
var peerDependenciesNames = Object.keys(peerDependencies);
var installCommand = 'yarn add --peer' + peerDependenciesNames.reduce(
	function(acc, depName) {
		return acc + ' ' + depName + '@' + peerDependencies[depName]
	},
	''
);

console.log(installCommand);
