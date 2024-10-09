import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

const Background3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.IcosahedronGeometry(1, 0)
    const material = new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.5 })
    
    const objects: THREE.Mesh[] = []
    for (let i = 0; i < 50; i++) {
      const object = new THREE.Mesh(geometry, material)
      object.position.set(
        Math.random() * 40 - 20,
        Math.random() * 40 - 20,
        Math.random() * 40 - 20
      )
      object.scale.multiplyScalar(Math.random() * 0.8 + 0.2)
      scene.add(object)
      objects.push(object)
    }

    camera.position.z = 5

    // Post-processing
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    )
    bloomPass.threshold = 0
    bloomPass.strength = 0.6
    bloomPass.radius = 0.5
    composer.addPass(bloomPass)

    // Raycaster setup
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObjects(objects)

      objects.forEach((obj) => {
        if (intersects.find((intersect) => intersect.object === obj)) {
          obj.scale.set(1.2, 1.2, 1.2)
        } else {
          obj.scale.set(1, 1, 1)
        }
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)

      objects.forEach((obj) => {
        obj.rotation.x += 0.003
        obj.rotation.y += 0.003
        obj.position.y += Math.sin(Date.now() * 0.001 + obj.position.x) * 0.005
      })

      composer.render()
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      composer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouseMove)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-50" />
}

export default Background3D