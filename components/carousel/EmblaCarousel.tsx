'use client';

import { useEffect, useCallback, useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Thumb from './EmblaCarouselThumbsButton';

interface EmblaCarouselProps {
    slides: string[];
    options: any;
    priority?: boolean;
}

const EmblaCarousel = ({ slides, options, priority = false }: EmblaCarouselProps) => {
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

    const subscribe = useCallback(
        (onStoreChange: () => void) => {
            if (!emblaMainApi) return () => {};
            emblaMainApi.on('select', onStoreChange).on('reInit', onStoreChange);
            return () => {
                emblaMainApi.off('select', onStoreChange).off('reInit', onStoreChange);
            };
        },
        [emblaMainApi]
    );

    const selectedIndex = useSyncExternalStore(
        subscribe,
        () => (emblaMainApi ? emblaMainApi.selectedScrollSnap() : 0),
        () => 0
    );

    useEffect(() => {
        if (!emblaThumbsApi) return;
        emblaThumbsApi.scrollTo(selectedIndex);
    }, [emblaThumbsApi, selectedIndex]);

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
                    {slides.map((image: string, index: number) => {
                        const isLcp = priority && index === 0;
                        return (
                            <div className="embla__slide" key={index}>
                                <Image
                                    src={image}
                                    alt=""
                                    width={1896}
                                    height={1080}
                                    className="w-full h-auto"
                                    priority={isLcp}
                                    loading={isLcp ? undefined : 'eager'}
                                    fetchPriority={isLcp ? undefined : 'low'}
                                />
                            </div>
                        );
                    })}
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
