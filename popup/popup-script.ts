const leftPad = require("left-pad")

const textNode = document.getElementById("text")
const amountNode = document.getElementById("amount")
const resultNode = document.getElementById("result")
const withNode = document.getElementById("with")
const leftpadForm = document.getElementById("leftpad-form")

if (
	!(
		textNode instanceof HTMLInputElement &&
		amountNode instanceof HTMLInputElement &&
		withNode instanceof HTMLInputElement &&
		resultNode instanceof HTMLOutputElement &&
		leftpadForm instanceof HTMLFormElement
	)
)
	throw new Error("Element was not correct type")

if (!amountNode)
	leftpadForm.addEventListener(
		"submit",
		(e) => {
			e.preventDefault()
			resultNode.value = leftPad(
				textNode.value,
				amountNode.valueAsNumber,
				withNode.value
			)
		},
		false
	)

document.getElementById("pad-bg").addEventListener("click", (e) => {
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
