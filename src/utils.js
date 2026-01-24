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
	.normalize('NFKD') // Decompose accented characters
  	.replace(/[\u0300-\u036f]/g, '') // Remove combining diacritical marks
	.replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
	.replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
	.replace(/^-+|-+$/g, '') // Trim hyphens from start and end
	.trim() // Trim whitespace