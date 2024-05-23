export default function Footer() {
    return (
        <footer className="w-full bg-zinc-950 max-w-6xl p-12 border-x border-b border-zinc-800 flex items-center justify-center">
            <p className="text-zinc-500 text-xl">© {new Date().getFullYear()} Alex Thummalapalli. All rights reserved.</p>
        </footer>
    )
}