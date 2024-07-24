import { defineStore } from "pinia";
import { generateUUID } from "three/src/math/MathUtils.js";
import { useStorage } from '@vueuse/core'

export const useStore = defineStore('index', () => {
	const windowId = ref(generateUUID())
	const windowPosition = ref(useStorage('windowPostition:' + windowId.value, {x: window.screenX, y: window.screenY}))

	window.screenX


	function setPosition(position: {x: number, y: number}) {
		windowPosition.value = position
	}

	return {windowId, windowPosition, setPosition }
})