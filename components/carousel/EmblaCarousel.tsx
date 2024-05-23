'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Thumb from './EmblaCarouselThumbsButton';

interface EmblaCarouselProps {
    slides: string[];
    options: any;
}

const EmblaCarousel = ({ slides, options }: EmblaCarouselProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    });
    const emblaNodeRef = useRef<HTMLDivElement>(null);

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();

        emblaMainApi.on('select', onSelect).on('reInit', onSelect);
    }, [emblaMainApi, onSelect]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!emblaMainApi) return;

            if (event.key === 'ArrowLeft') {
                emblaMainApi.scrollPrev();
            } else if (event.key === 'ArrowRight') {
                emblaMainApi.scrollNext();
            }
        };

        const emblaNode = emblaNodeRef.current;
        if (emblaNode) {
            emblaNode.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            if (emblaNode) {
                emblaNode.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [emblaMainApi]);

    return (
        <div className="embla" ref={emblaNodeRef} tabIndex={0}>
            <div className="embla__viewport" ref={emblaMainRef}>
                <div className="embla__container">
                    {slides.map((image: string, index: number) => (
                        <div className="embla__slide" key={index}>
                            <img src={image} className="w-full" />
                        </div>
                    ))}
                </div>
            </div>
            {slides.length > 1 &&
                <div className="embla-thumbs">
                    <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                        <div className="embla-thumbs__container">
                            {slides.map((image: string, index: number) => (
                                <Thumb
                                    key={index}
                                    onClick={() => onThumbClick(index)}
                                    selected={index === selectedIndex}
                                    image={image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default EmblaCarousel;
