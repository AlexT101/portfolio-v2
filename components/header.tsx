export default function Header() {
    return (
        <header className="w-full bg-zinc-950 max-w-6xl p-6 sm:p-12 py-12 sm:py-20 border-x border-b border-zinc-800 flex flex-col">
            <p className="text-zinc-500 text-lg sm:text-xl mb-4">Portfolio Website</p>
            <h2 className="border-l-4 border-zinc-500 -ml-6 sm:-ml-12 pl-4 sm:pl-10 text-3xl sm:text-5xl font-semibold text-zinc-400">
                <span className="font-bold text-white">Alex Thummalapalli. </span>
                <span className="block sm:inline">CS Student.</span>
            </h2>
            <p className="text-zinc-500 text-lg sm:text-xl mt-8"><span className="text-zinc-400 font-bold">Hi, I'm Alex!</span> I'm majoring in computer science at the Georgia Institute of Technology. I enjoy building websites using React, Typescript, HTML, and CSS. I also specialize in UI and UX design.</p>
            <div className="text-zinc-400 text-xl sm:text-2xl flex flex-col gap-4 mt-8">
                <p><span className="font-bold text-white">Github:</span> <a className="hover:underline" href="https://github.com/alext101" target="_blank" rel="noopener noreferrer">/alext101</a></p>
                <p><span className="font-bold text-white">LinkedIn:</span> <a className="hover:underline" href="https://www.linkedin.com/in/alext101/" target="_blank" rel="noopener noreferrer">/alext101</a></p>
            </div>
        </header>
    )
}