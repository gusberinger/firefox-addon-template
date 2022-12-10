const leftPad = require("left-pad")

const textNode = document.getElementById("text")
const amountNode = document.getElementById("amount")
const resultNode = document.getElementById("result")
const withNode = document.getElementById("with")
const bgPad = document.getElementById("pad-bg")

if (!(textNode instanceof HTMLInputElement)) throw new Error("Not input")
if (!(amountNode instanceof HTMLInputElement)) throw new Error("Not input")
if (!(resultNode instanceof HTMLInputElement)) throw new Error("Not input")
if (!(withNode instanceof HTMLInputElement)) throw new Error("Not input")
if (!(bgPad instanceof HTMLButtonElement)) throw new Error("Not button")

bgPad.addEventListener("click", (e) => {
	let sendingMessage = browser.runtime.sendMessage({
		text: textNode.value,
		amount: amountNode.valueAsNumber,
		with: withNode.value,
	})
	sendingMessage.then((result) => {
		resultNode.value = result
	})
})

export {}
