interface ButtonProps {
    type: 'redirect' | 'submit'
}

export function Button({ type }: ButtonProps) {
    if (type === 'redirect') {
        return (
            <a href="#forms" className="text-center max-w-md w-full bg-[#5484ff] box py-4 sm:px-24 rounded-full font-extrabold text-lg text-white uppercase">Quero participar</a>
        )
    }
    return (
        <button type="submit" className="max-w-md w-full bg-[#5484ff] box py-4 sm:px-24 rounded-full font-extrabold text-lg text-white uppercase">Quero participar</button>
    )
}