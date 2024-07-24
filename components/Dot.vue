<template>
	<TresMesh ref="dotRef" :position="coord">
		<TresSphereGeometry :scale="[0.01, 0.01, 0.01]"/>
		<TresMeshNormalMaterial/>
	</TresMesh>
</template>

<script setup lang="ts">
import type { Mesh, Vector3 } from 'three/src/Three.js';
import { gsap } from 'gsap';
import { shallowRef } from 'vue'
import { randFloat } from 'three/src/math/MathUtils.js';

const dotRef = shallowRef<Mesh>()

type Props = {
	coord: Vector3
}

const props = defineProps<Props>();

watchEffect(() => {
	if (dotRef.value) {
		gsap.to(
			dotRef.value.position,
			{
				y: props.coord.y + randFloat(-0.15, 0.15),
				x: props.coord.x + randFloat(-0.15, 0.15),
				z: props.coord.z + randFloat(-0.15, 0.15),
				ease: 'power1.inOut',
				duration: randFloat(0.5, 0.8),
				stagger: {
					each: 0.01,
					repeat: -1,
					yoyo: true,
				}
			}
			
		)
	}
})
</script>