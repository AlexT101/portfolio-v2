'use client';

export const Thumb = (props: any) => {
    const { selected, image, onClick } = props

    return (
        <div
            className={'embla-thumbs__slide'.concat(
                selected ? ' embla-thumbs__slide--selected' : ''
            )}
        >
            <button
                onClick={onClick}
                type="button"
             
            >
                        <img src={image} className="w-full" />

            </button>
        </div>
    )
}
