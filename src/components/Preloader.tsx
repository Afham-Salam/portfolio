import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { OrbitControls } from "three-stdlib";

const Preloader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-34, 3, -2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
   
    const light = new THREE.HemisphereLight(0xffffff, 0xb4b3f2, 1);
    scene.add(light);

    new OrbitControls(camera, renderer.domElement);

    let ring1: THREE.Mesh, ring2: THREE.Mesh;
    let pivot1 = new THREE.Group();
    let pivot2 = new THREE.Group();

    const ringVert = (x: number) => {
      const geo = new THREE.TorusGeometry(4, 1, 20, 100);
      const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
      ring1 = new THREE.Mesh(geo, mat);
      ring1.position.x = x;
      pivot1.add(ring1);
      scene.add(pivot1);
      pivot1.applyMatrix4(new THREE.Matrix4().makeTranslation(-6, 0, 0));
    };

    const ringHor = (x: number, rotX: number) => {
      const geo = new THREE.TorusGeometry(4, 1, 20, 100);
      const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
      ring2 = new THREE.Mesh(geo, mat);
      ring2.position.x = x;
      ring2.rotation.x = rotX;
      pivot2.add(ring2);
      scene.add(pivot2);
      pivot2.applyMatrix4(new THREE.Matrix4().makeTranslation(-10, 0, 0));
    };

    const animateRings = () => {
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });
      tl.to(pivot1.rotation, { y: -3.14 }, "right")
        .to(pivot2.rotation, { z: 3.14 }, "up")
        .add(() => {
          pivot1.applyMatrix4(new THREE.Matrix4().makeTranslation(-8, 0, 0));
          gsap.set(ring1.position, { x: -4 });
        })
        .to(pivot1.rotation, { y: -3.14 }, "left")
        .add(() => {
          pivot2.applyMatrix4(new THREE.Matrix4().makeTranslation(-8, 0, 0));
          gsap.set(ring2.position, { x: -4 });
        })
        .to(pivot2.rotation, { z: 0 }, "down")
        .add(() => {
          pivot1.applyMatrix4(new THREE.Matrix4().makeTranslation(+8, 0, 0));
          gsap.set(ring1.position, { x: 4 });
        })
        .add(() => {
          pivot2.applyMatrix4(new THREE.Matrix4().makeTranslation(+8, 0, 0));
          gsap.set(ring2.position, { x: 4 });
        });
      return tl.timeScale(0.575);
    };

    const animateCamera = () => {
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
      tl.to(camera.position, {
        x: "-=16",
        duration: 2,
        onComplete: () => {
          gsap.set(camera.position, { x: "+=24" });
        },
      });
      return tl.timeScale(0.575);
    };

    const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    };

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", resize);

    ringVert(4);
    ringHor(4, THREE.MathUtils.degToRad(-90));
    animateRings();
    animateCamera();
    render();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
      <canvas ref={canvasRef} className="w-full h-full block" />
      
    </div>
  );
};

export default Preloader;
