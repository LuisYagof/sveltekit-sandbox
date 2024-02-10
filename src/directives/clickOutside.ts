export function clickOutside(node: HTMLElement, onOutsideClick: () => void) {
	function handleClick({ target }: MouseEvent) {
		const clickedOutside = !node.contains(target as Node)
		if (clickedOutside) {
			onOutsideClick()
		}
	}
	window.addEventListener('click', handleClick)

	return {
		destroy() {
			window.removeEventListener('click', handleClick)
		}
	}
}
