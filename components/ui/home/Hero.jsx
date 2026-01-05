"use client";

import Image from "next/image";

import lush_forest_back_img from "@/public/images/lush-forest-back.png";
import lush_forest_front_img from "@/public/images/lush-forest-front.png";
import { lushForestFrontBase64, lushForestBackBase64 } from "./base64Images";
import HeroAnimation from "../../gsapanimations/HeroAnimation";
import { twJoin } from "tailwind-merge";


export default function Hero({className, ...props}) {
  const hero_section_id = "hero"
  const lush_forest_back_id = "lush_forest_back_id"
  const lush_forest_front_id = "lush_forest_front_id"
  const the_saranda_text_id = "the_saranda_text_id"

  return <>
    <main
      id={hero_section_id}
      className={twJoin(
        `h-[108vh] overflow-y-clip relative`,
        className
      )}
      {...props}
    >
      <Image
        id={lush_forest_back_id}
        src={lush_forest_back_img}
        alt="Landing Page Background"
        fill
        sizes="100vw"
        placeholder={lushForestBackBase64}
        className="-z-1 object-cover"
      />
      <div
        className="h-full animate-heroslideup"
      >
        <div
          id={the_saranda_text_id}
          className="
            text-center h-full flex flex-col justify-center text-primary
            uppercase -translate-y-15/100 animate-heroslidedown
          "
        >
          <h1 className="-mb-[15px]">Saranda</h1>
          <p className="text-base lg:text-xl font-bold">
            THE HOUSE OF EXCELLENCE AND INNOVATION
          </p>
          
          {/* Margazhi Link Section */}
          <div className="mt-8 animate-fadein">
            <p 
              className="text-sm text-black hover:text-black  lg:text-lg font-semibold mb-4 normal-case tracking-wide"
              style={{
                // color: '#1a3a1a',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                letterSpacing: '0.05em'
              }}
            >
              ✨ Together let's bring Saranda on top ✨
            </p>
            <a 
              href="https://iitmparadox.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="
                relative inline-block px-8 py-3 text-secondary
                rounded-lg font-semibold text-sm lg:text-base
                bg-black  transition-all duration-300
                shadow-lg hover:shadow-xl normal-case overflow-visible
                group
              "
            >
              <span className="relative z-10">Join Margazhi Festival</span>
              
              {/* Animated Emojis - ONE PAIR at a time (both emojis together) */}
              {/* Pair 1: 🤩🥳 together at 0s */}
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{top: '-10px', left: '25%', animationDelay: '0s'}}>🤩</span>
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{top: '-10px', right: '25%', animationDelay: '0s'}}>🥳</span>
              
              {/* Pair 2: 🤝🏻💪🏻 together at 3s */}
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{bottom: '-10px', left: '30%', animationDelay: '3s'}}>🤝🏻</span>
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{bottom: '-10px', right: '30%', animationDelay: '3s'}}>💪🏻</span>
              
              {/* Pair 3: 💃🏻🕺🏻 together at 6s */}
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{top: '50%', left: '-15px', animationDelay: '6s'}}>💃🏻</span>
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{top: '50%', right: '-15px', animationDelay: '6s'}}>🕺🏻</span>
              
              {/* Pair 4: 🧑🏻‍💻👩🏻‍💻 together at 9s */}
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{top: '-10px', left: '35%', animationDelay: '9s'}}>🧑🏻‍💻</span>
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{top: '-10px', right: '35%', animationDelay: '9s'}}>👩🏻‍💻</span>
              
              {/* Pair 5: 🤖🎮 together at 12s */}
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{bottom: '-10px', left: '28%', animationDelay: '12s'}}>🤖</span>
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{bottom: '-10px', right: '28%', animationDelay: '12s'}}>🎮</span>
              
              {/* Pair 6: 🦸🏻‍♂️🦸🏻‍♀️ together at 15s */}
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{top: '30%', left: '-15px', animationDelay: '15s'}}>🦸🏻‍♂️</span>
              <span className="absolute text-xl animate-emoji-single    pointer-events-none" style={{top: '30%', right: '-15px', animationDelay: '15s'}}>🦸🏻‍♀️</span>
            </a>
          </div>
        </div>
      </div>
      <div className="inset-0 absolute animate-treeslidedown pointer-events-none   ">
        <Image
          id={lush_forest_front_id}
          src={lush_forest_front_img}
          alt="Landing Page Foreground"
          fill
          sizes="(max-width: 768px) 200vw, 100vw"
          placeholder={lushForestFrontBase64}
          className="object-cover"
        />
      </div>
      <div
        className="
          absolute inset-0 bg-linear-to-t from-[#d1ccb0] to-[#d1ccb0]/0 to-10%
          via-[#d1ccb0]/75 via-4% pointer-events-none
        "
      ></div>
    </main>

    <HeroAnimation
      hero_section_id = {hero_section_id}
      lush_forest_back_id = {lush_forest_back_id}
      lush_forest_front_id = {lush_forest_front_id}
      the_saranda_text_id = {the_saranda_text_id}
    />
  </>
}