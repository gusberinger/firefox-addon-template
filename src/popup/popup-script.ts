const textNode = document.getElementById("text") as HTMLInputElement
const amountNode = document.getElementById("amount") as HTMLInputElement
const resultNode = document.getElementById("result") as HTMLInputElement
const withNode = document.getElementById("with") as HTMLInputElement
const bgPad = document.getElementById("pad-bg") as HTMLButtonElement

bgPad.addEventListener("click", (e) => {
	browser.runtime
		.sendMessage({
			text: textNode.value,
			amount: amountNode.valueAsNumber,
			with: withNode.value,
		})
		.then((result) => {
			resultNode.value = result
		})
})

export {}
