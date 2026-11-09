


import gsap from 'gsap'
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'// Scene


const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  70, 
  window.innerWidth / window.innerHeight, 
  0.1,   // near plane
5000   // far plane large enough for big objects
);

// Position camera outside the large range
camera.position.set(0, 500, 1000); 
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

// Directional Light (main light with shadows)
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(1000, 1500, 1000);  // high enough for big scene
dirLight.castShadow = true;

// Shadow camera setup (fit large scene)
// dirLight.shadow.camera.left = -1200;
// dirLight.shadow.camera.right = 1200;
// dirLight.shadow.camera.top = 1200;
// dirLight.shadow.camera.bottom = -1200;
// dirLight.shadow.camera.near = 100;
// dirLight.shadow.camera.far = 4000;


// Shadow acne fixes


// Shadow map resolution
dirLight.shadow.mapSize.width = 4096;
dirLight.shadow.mapSize.height = 4096;

scene.add(dirLight);

// Optional: Helper to visualize shadow camera
// const helper = new THREE.CameraHelper(dirLight.shadow.camera);
// scene.add(helper);

// Example ground
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(5000, 5000),
  new THREE.MeshStandardMaterial({ color: 0x888888 })
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
// scene.add(ground);

// Example big object
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2000, 1000, 500),
  new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
cube.position.set(0, 0, 0);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);

// Render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
