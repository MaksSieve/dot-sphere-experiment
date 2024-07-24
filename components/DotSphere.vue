<template>
	<TresGroup ref="ref">
		<Dot v-for="coord in coords" :coord="coord" />
	</TresGroup>
</template>

<script setup lang="ts">
import { Vector3 } from 'three';
import { randFloat, randInt } from 'three/src/math/MathUtils.js';
import { shallowRef } from 'vue';
import Dot from '~~/components/Dot.vue';

type Props = {
	center: Vector3
	radius: number
}

const dense = 25
const coords: Array<Vector3> = []

const props = defineProps<Props>()
for (let phi = -Math.PI; phi < Math.PI; phi += Math.PI/dense) {
	for (let a = 0; a < 2 * Math.PI; a += 2*Math.PI/dense) {
		coords.push(new Vector3(
			props.center.x + props.radius * Math.cos(a) * Math.sin(phi),
			props.center.y + props.radius * Math.sin(a) * Math.sin(phi),
			props.center.z + props.radius * Math.cos(phi)
		))
	}
}



const ref = shallowRef()

const { onBeforeRender } = useLoop()

onBeforeRender(({ delta, elapsed }) => {
	if (ref.value) {
		ref.value.rotation.y += randFloat(0, 0.1) * delta;
		ref.value.rotation.x += randInt(0, 1) ? randFloat(0, 0.2) * delta : randFloat(-0.2, 0) * randFloat(0, 0.00001) * elapsed;
		ref.value.rotation.z += randFloat(0, 0.00001) * elapsed;
	}
})

</script>