const Launchpad = require('launchpad-mini')

const pad = new Launchpad()

function testSequence() {
	console.log('Clearing...')
	pad.sendRaw([240, 0, 32, 41, 2, 13, 7, 247])
	pad.sendRaw([240, 0, 32, 41, 2, 13, 8, 1, 0, 1, 247])

	console.log('Beginning test sequence...')

	// Brightness
	for(var i=0; i<100; i++) {
		for(var x=0; x<127; x++) {
			pad.reset(x)
		}

		for(var x=127; x>0; x--) {
			pad.reset(x)
		}
	}

	console.log('Test sequence concluded.')
	pad.sendRaw([240, 0, 32, 41, 2, 13, 7, 247])
	pad.sendRaw([240, 0, 32, 41, 2, 13, 8, 1, 0, 1, 247])

	return
}

async function main() {
	let ports = pad.availablePorts
	let inputPort = ports.input[1].portNumber
	let outputPort = ports.output[1].portNumber

	pad.connect(inputPort, outputPort).then(testSequence())
}


main()

