'use client';

import Image from 'next/image';

interface ThumbProps {
    selected: boolean;
    image: string;
    onClick: () => void;
}

export default function Thumb({ selected, image, onClick }: ThumbProps) {
    return (
        <div className={`embla-thumbs__slide ${selected ? ' embla-thumbs__slide--selected' : ''}`}>
            <button onClick={onClick}>
                <Image
                    src={image}
                    alt=""
                    width={1896}
                    height={1080}
                />
            </button>
        </div>
    )
}
