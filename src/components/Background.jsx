import * as Three from 'three';
import {Depth, LayerMaterial, Noise} from 'lamina';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const ANIM_STEP = 0.3;

const Background = () => {
  const bgRef = useRef();

  useFrame((state, delta) => {
    // bgRef.current.rotation.z =
    // bgRef.current.rotation.y =
    bgRef.current.rotation.x += delta * ANIM_STEP;
  });

  return (
    <mesh scale={100} ref={bgRef}>
      <sphereGeometry args={[1, 64, 64]} />
      {/* <meshBasicMaterial color={"red"} side={Three.BackSide}/> */}
      <LayerMaterial side={Three.BackSide}>
        <Depth 
          colorA="#f21a62"
          colorB="#0081fc"
          alpha={1}
          mode='normal'
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping='local'
          type='white'
          scale={100}
          colorA={'white'}
          colorB={'grey'}
          mode='subtract'
          alpha={0.12}
        />
      </LayerMaterial>
    </mesh>
  )
}

export default Background;