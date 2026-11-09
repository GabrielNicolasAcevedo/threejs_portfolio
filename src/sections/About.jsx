import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("gabrielnacevedo@gmail.com");

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }



    return (
        <section className="c-space my-20 ">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 full-h">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid_me.png" alt="grid_me" className="w-full sm:h-[276px] h-fit object contain " />

                        <div>
                            <p className="grid-headtext">
                                Hola, soy Gabriel!
                            </p>
                            <p className="grid-subtext">
                                Cuento con 3 años de experiencia en el sector IT, desempeñándome en áreas de Testing de Software, Análisis Funcional y Análisis de Negocio. Estas experiencias me permitieron desarrollar una sólida comprensión de cómo la tecnología puede resolver problemas reales.
                            </p>

                            {/* <p className="grid-subtext mt-3">Actualmente estoy enfocado en el desarrollo de software, creando aplicaciones web y explorando tecnologías modernas como JavaScript, React, Node.js y Three.js.
                            </p> */}
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container items-center">
                        <img src="assets/grid_stack.png" alt="grid_stack" className="w-full sm:w-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                Tech Stack
                            </p>
                            <p className="grid-subtext">
                                Estoy desarrollando mis habilidades en JavaScript y React, explorando tecnologías modernas de frontend y desarrollo web 3D.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: -32.5,
                                    lng: -61,
                                    text: "Estoy aca!",
                                    color: 'white',
                                    size: 50
                                }]}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>
                                Con base en Argentina 🇦🇷
                            </p>

                            <p className="grid-subtext">
                                Estoy radicado en Argentina (UTC−3) y estoy abierto a oportunidades laborales y colaboraciones remotas con equipos de todo el mundo.
                            </p>

                            <Button name="Contactame" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                Mi pasión por la tecnología
                            </p>
                            <p className="grid-subtext">
                                Disfruto aprender, experimentar con nuevas tecnologías y convertir ideas en proyectos reales. Siempre buscando aprender algo nuevo y mejorar en el proceso.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                Contactame
                            </p>

                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg" } alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">gabrielnacevedo@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About