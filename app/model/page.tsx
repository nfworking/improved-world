"use client"

import { useState, useRef, Suspense, useEffect } from "react"
import Layout from "../components/layout"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Environment, useEnvironment, Text } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { ErrorBoundary } from "react-error-boundary"
import * as THREE from "three"

function CoralModel() {
  const [modelError, setModelError] = useState(false)
  const [gltf, setGltf] = useState(null)
  const meshRef = useRef()

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedGltf = await new GLTFLoader().loadAsync("/coral_reef_model.glb")
        setGltf(loadedGltf)
      } catch (error) {
        console.error("Failed to load 3D model:", error)
        setModelError(true)
      }
    }
    loadModel()
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })

  if (modelError) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="coral" />
      </mesh>
    )
  }

  if (!gltf) {
    return null
  }

  return <primitive object={gltf.scene} ref={meshRef} scale={[0.5, 0.5, 0.5]} />
}

function EnvironmentWrapper() {
  const envMap = useEnvironment({ files: "/black_background.hdr" })
  return <Environment map={envMap} background />
}

function ModelContainer() {
  return (
    <ErrorBoundary fallback={<div className="text-red-500">Error loading 3D model</div>}>
      <Suspense fallback={<LoadingScreen />}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <CoralModel />
          <OrbitControls />
          <EnvironmentWrapper />
        </Canvas>
      </Suspense>
    </ErrorBoundary>
  )
}

function LoadingScreen() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="text-white text-2xl font-bold">Loading 3D Model...</div>
    </div>
  )
}

function InfoPanel({ info, setInfo }) {
  const items = ["Hard Corals", "Soft Corals", "Fish", "Invertebrates", "Algae", "Sponges"]

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Coral Reef Components</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {items.map((item) => (
          <button
            key={item}
            className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300"
            onMouseEnter={() => setInfo(item)}
            onMouseLeave={() => setInfo("")}
          >
            {item}
          </button>
        ))}
      </div>
      {info && (
        <div className="mt-4 p-4 bg-blue-900 bg-opacity-50 rounded">
          <p>{info} are an essential part of the coral reef ecosystem...</p>
        </div>
      )}
    </div>
  )
}

export default function Model() {
  const [info, setInfo] = useState("")

  return (
    <Layout>
      <div className="relative w-full h-screen">
        <ModelContainer />
        <InfoPanel info={info} setInfo={setInfo} />
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded text-white text-sm">
          Click and drag to rotate. Scroll to zoom.
        </div>
      </div>
    </Layout>
  )
}

