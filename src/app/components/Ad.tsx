import { useEffect } from 'preact/hooks'

declare const ethicalads: any


export function Ad() {
	useEffect(() => {
		document.getElementById('ad-placeholder')?.remove()
		if ('ethicalads' in window) {
			ethicalads.load()
		}
	}, [])

	return <></>
}
