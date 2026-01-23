export const getPageTitle = async (url) => {
	const res = await fetch(url)
	const html = await res.text()
	const match = html.match(/<title>([^<]*)<\/title>/i)
	return match ? match[1] : null
}

export const pick = (allow, props) => {
	let allowed = {}
	for (let prop in props) {
		if (allow.includes(prop)) {
			allowed[prop] = props[prop]
		}
	}
	return allowed
}

export const slugify = (text = '') => text
	.toLowerCase()
	.replace(/[^\w- ]+/g, '')
	.trim()
	.replace(/ /g, '-')
