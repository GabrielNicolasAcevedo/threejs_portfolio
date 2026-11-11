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
                                Hello, I'm Gabriel!
                            </p>
                            <p className="grid-subtext">
                                I have 3 years of experience in the IT industry, working in Software Testing, Functional Analysis, and Business Analysis. These experiences have helped me develop a solid understanding of how technology can solve real-world problems.
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
                                I'm continuously developing my skills in JavaScript and React, exploring modern frontend technologies and 3D web development.
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
                                Based in Argentina 🇦🇷
                            </p>

                            <p className="grid-subtext">
                                I'm based in Argentina (UTC-3) and open to remote opportunities and collaborations with teams around the world.
                            </p>

                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                My Passion for Technology
                            </p>
                            <p className="grid-subtext">
                                I enjoy learning, experimenting with new technologies, and turning ideas into real-world projects. Always looking to learn something new and improve along the w
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                Get in Touch
                            </p>

                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
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