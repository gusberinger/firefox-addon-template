const leftPad = require("left-pad")

const callback = async (
	myMessage: any,
	_: browser.runtime.MessageSender,
	mySendResponse: (resut: object) => boolean
) => {
	const result = await leftPad(
		myMessage.text,
		myMessage.amount,
		myMessage.with
	)
	mySendResponse(result)
}

browser.runtime.onMessage.addListener(callback)

export {}
