const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-950 max-w-6xl p-6 sm:p-12 border-x border-b border-zinc-800 flex items-center justify-center text-center">
            <p className="text-[#898992] text-lg sm:text-xl">
                <span className="block sm:inline">© {currentYear} Alex Thummalapalli. </span>
                <span className="block sm:inline">All rights reserved.</span>
            </p>
        </footer>
    )
}