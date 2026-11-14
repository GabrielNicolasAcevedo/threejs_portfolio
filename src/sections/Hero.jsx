import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, Ring } from "@react-three/drei"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
// import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants/index.js"
import Target from "../components/Target.jsx"
import ReactLogo from "../components/ReactLogo.jsx"
import Cube from "../components/Cube.jsx"
import Rings from "../components/Rings.jsx"
import HeroCamera from "../components/HeroCamera.jsx"
import Button from "../components/Button.jsx"

const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    console.log('Viewport:', {
        isSmall,
        isMobile,
        isTablet,
        ringPosition: sizes.ringPosition,
    });

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans" >
                    Hello, I'm Gabriel <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient" >
                    Building Products & Brands
                </p>
            </div>

            <div className="w-full h-full absolute inset-0 mt-10">

                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>

                        <PerspectiveCamera
                            makeDefault
                            position={[0, 0, 30]} />


                        <HeroCamera isMobile={isMobile} >
                            <HackerRoom
                                position={sizes.deskPosition}
                                scale={sizes.deskScale}
                                rotation={[0.2, -Math.PI, 0]}
                            // position={[x.positionX, x.positionY, x.positionZ]}
                            // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                            // scale={[x.scale, x.scale, x.scale]}
                            />
                        </HeroCamera>

                        <group>
                            <Target
                                position={sizes.targetPosition} />
                            <ReactLogo
                                position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>

                        <ambientLight
                            intensity={1} />
                        <directionalLight
                            intensity={0.5}
                            position={[10, 10, 10]} />



                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together!" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero