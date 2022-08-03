<template>
  <div>
    <canvas ref="container"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
export default {
  mounted() {
    const container = this.$refs.container;
    const scene = new THREE.Scene();

    // Red cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Sizes
    const sizes = { width: 800, height: 600 };

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    // Render
    console.log(container);
    const renderer = new THREE.WebGLRenderer({
      canvas: container,
    });
    renderer.setSize(sizes.width, sizes.height);

    renderer.render(scene, camera);
  },
};
</script>

<style lang="scss" scoped></style>
