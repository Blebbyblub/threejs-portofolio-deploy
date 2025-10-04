import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' raenault.bandaso@binus.ac.id');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Raenault Maxine Salle Bandaso</p>
              <p className="grid-subtext text-justify">
                Computer Science student at <strong> Bina Nusantara University</strong> specializing in{' '}
                <strong>Intelligent Systems</strong>. I’m passionate about blending <strong>AI technologies</strong>{' '}
                with <strong> user-centered app design</strong> to create meaningful, interactive solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <br />
              <p className="grid-subtext text-justify">
                <ul className="list-disc list-outside pl-3 text-base text-gray-300 space-y-1">
                  <li>Frontend: HTML, CSS, JavaScript, Tailwind, Figma</li>
                  <li>Backend: PHP, Node.js, MySQL</li>
                  <li>AI/ML: Python, TensorFlow, XGBoost, YOLO</li>
                  <li>AR/3D: Unity, Vuforia, C#</li>
                  <li>Tools: GitHub, Agile, Usability Testing</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container flex flex-col justify-center items-center">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext text-justify">
                I&apos;m based in Jakarta, Indonesia and open to remote work worldwide as well as offline work in
                Jakarta.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container flex flex-col justify-center items-center">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext text-justify">
                My passion for coding comes from the joy of{' '}
                <span className="font-semibold">turning ideas into real applications</span>. I enjoy exploring different
                areas of technology, from <span className="font-semibold">web development </span> to
                <span className="font-semibold"> interactive experiences</span>, and I’m driven to create solutions that
                are both
                <span className="font-semibold"> practical and user-friendly</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container flex flex-col justify-center items-center">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-1xl md:text-xl font-medium text-gray_gradient text-white">
                  raenault.bandaso@binus.ac.id
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
