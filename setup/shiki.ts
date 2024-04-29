/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
	return {
		themes: {
			light: 'night-owl',
			dark: 'night-owl',
		},
		langs: [
			'lua'
		]
	}
})