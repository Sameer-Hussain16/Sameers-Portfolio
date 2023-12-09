import "./hero.scss"
import gsap from 'gsap';
import { useLayoutEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/all";



const Hero = () => {

const firstText = useRef(null);
const secondText = useRef(null);
const slider = useRef(null);
let xPercent = 0;
let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-10px"
    })
    requestAnimationFrame(animate);

  }, [])
  
  const animate = () => {
    if(xPercent < -100) {
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <div className="hero">
      <div ref={slider} className="container" >
        <p ref={firstText}> Frontend Developer -</p>
        <p ref={secondText}> Frontend Developer - </p>
    </div>
    </div>
  )
}

export default Hero