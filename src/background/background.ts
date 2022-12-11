import leftPad from "../utils/leftPad"

// ? needed to satisfy object type
interface Message {
	text?: string
	with?: string
	amount?: number
}

browser.runtime.onMessage.addListener(
	async (
		myMessage: Message,
		_: browser.runtime.MessageSender,
		mySendResponse: (resut: object) => boolean
	) => {
		const result = leftPad(
			myMessage.text!,
			myMessage.amount!,
			myMessage.with!
		)
		mySendResponse({ result })
	}
)

export {}
