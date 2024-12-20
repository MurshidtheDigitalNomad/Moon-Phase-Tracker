import { useEffect } from 'react';
import * as THREE from 'three';

function Background(){
    useEffect(()=>{
        const scene= new THREE.Scene();
        const camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        //styling renderer(background)
        renderer.domElement.style.position = 'fixed'; // Fixed to viewport
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.width = '100vw';
        renderer.domElement.style.height = '100vh';
        renderer.domElement.style.zIndex = '-1'; 


        document.body.appendChild( renderer.domElement);

        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({color: 0xffffff, size: 0.1})

        const starPosition = [];
        for (let i=0; i<1000; i++){
            const x = THREE.MathUtils.randFloatSpread(200);
            const y = THREE.MathUtils.randFloatSpread(200);
            const z = THREE.MathUtils.randFloatSpread(200);
            starPosition.push(x,y,z);
        }

        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPosition, 3))
        const stars= new THREE.Points(starGeometry, starMaterial);

        scene.add(stars)
        camera.position.z=5

        let speed = 0.001;
        
        function animate(){
            stars.rotation.x =speed;
            stars.rotation.y += speed;
            renderer.render(scene, camera)
        }

        renderer.setAnimationLoop(animate)

        return()=>{
            document.body.removeChild(renderer.domElement)
        }
    }, []);
    return null
    //It is used to not add anything unnecessary to REACTDOM such as div
}

export default Background;