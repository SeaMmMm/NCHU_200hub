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

    // Position
    // mesh.position.x = 0.7;
    // mesh.position.y = -0.6;
    // mesh.position.z = 1;

    // mesh.position.set(0.7, -0.6, 1);
    scene.add(mesh);

    // Scale
    // 也能用 set 方法 mesh.scale.set( <number>,<number>,<number>);
    // mesh.scale.y = 0.5;
    // mesh.scale.x = 2;
    // mesh.scale.z = 0.5;

    // Rotation
    mesh.rotation.reorder("YXZ");
    // mesh.rotation.y = Math.PI * 0.25;
    // mesh.rotation.x = Math.PI * 0.25;

    // Objects
    const group = new THREE.Group();
    scene.add(group);

    // Axes helper
    // const axesHelper = new THREE.AxesHelper();
    // scene.add(axesHelper);

    // Sizes
    const sizes = { width: 800, height: 600 };

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    camera.lookAt(mesh.position);

    // Render
    // console.log(container);
    const renderer = new THREE.WebGLRenderer({
      canvas: container,
    });
    renderer.setSize(sizes.width, sizes.height);

    // Clock
    const clock = new THREE.Clock();

    // Animations
    const tick = () => {
      // clock
      const elapsedTime = clock.getElapsedTime();

      // Update objects
      mesh.position.y = Math.sin(elapsedTime);
      mesh.position.x = Math.cos(elapsedTime);

      // Render
      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();
  },
};
</script>

<style lang="scss" scoped></style>
