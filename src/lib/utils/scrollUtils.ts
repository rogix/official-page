export function scrollToSection(e: MouseEvent) {
	const target = e.currentTarget as HTMLAnchorElement;
	const href = target.getAttribute('href') ?? '';

	const targetElement = document.querySelector(href);

	if (targetElement && targetElement instanceof HTMLElement) {
		const offsetTop = targetElement.offsetTop;

		scroll({
			top: offsetTop,
			behavior: 'smooth'
		});
	}
}
