import "./styles.css";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial
} from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
const loader = new FontLoader();
const scene = new Scene();
const renderer = new WebGLRenderer({
  antialias: true
});
const camera = new PerspectiveCamera(
  0.75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xffffee);
renderer.render(scene, camera);

loader.load("");
