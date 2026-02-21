"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { motion, useReducedMotion } from "framer-motion"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Link } from "wouter"
import { STEK_GLOBAL_URL } from "@/lib/constants"

interface HeroSlide {
    image: string
    title: string
    subtitle?: string
    description?: string
    cta?: React.ReactNode
}

interface HeroSliderProps {
    slides: HeroSlide[]
}

export function HeroSlider({ slides }: HeroSliderProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )
    const prefersReducedMotion = useReducedMotion()

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full relative group"
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index} className="pl-0">
                        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

                            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
                                <div className="max-w-3xl">
                                    {slide.subtitle && (
                                        <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">
                                            {slide.subtitle}
                                        </p>
                                    )}
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                        {slide.title}
                                    </h1>
                                    {slide.description && (
                                        <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
                                            {slide.description}
                                        </p>
                                    )}
                                    {slide.cta && (
                                        <div>
                                            {slide.cta}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {slides.length > 1 && (
                <>
                    <CarouselPrevious className="left-4 bg-black/50 hover:bg-black/70 text-white border-transparent hidden group-hover:flex transition-all duration-300" />
                    <CarouselNext className="right-4 bg-black/50 hover:bg-black/70 text-white border-transparent hidden group-hover:flex transition-all duration-300" />
                </>
            )}
        </Carousel>
    )
}
