const leftPad = require("left-pad")

interface Message {
	text?: string
	with?: string
	amount?: number
}

const callback = async (
	myMessage: Message,
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
