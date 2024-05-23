'use client';

interface ThumbProps {
    selected: boolean;
    image: string;
    onClick: () => void;
}

export default function Thumb({ selected, image, onClick }: ThumbProps) {
    return (
        <div className={`embla-thumbs__slide ${selected ? ' embla-thumbs__slide--selected' : ''}`}>
            <button onClick={onClick}>
                <img src={image} />
            </button>
        </div>
    )
}
