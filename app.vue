<template>
	<TresCanvas window-size clear-color="#000010">
		<TresPerspectiveCamera :position="[-4.5, 3, 4.5]" />
    	<OrbitControls />
		<Suspense>
			<DotSphere :center="center" :radius="1" />
		</Suspense>
	</TresCanvas>
</template>

<script setup lang="ts">
import { Vector3 } from 'three/src/Three.js';
import { OrbitControls } from '@tresjs/cientos';
import { useStore } from './store';


const center = new Vector3(0 ,0, 0)

const store = useStore()

setInterval(() => {
	if (store.windowPosition.x != window.screenX || store.windowPosition.y || window.screenY) {
		store.setPosition({ x: window.screenX, y: window.screenY })
	}
	
}, 200)
</script>