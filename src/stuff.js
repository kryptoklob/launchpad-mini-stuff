const Launchpad = require('launchpad-mini')

pad = new Launchpad()


async function setup() {

	return
}

async function main() {
	await setup()

	pad.reset(2)

	pad.on('key', k => {
		pad.col(k.pressed ? pad.red : pad.green, k)
	})
}


main()

