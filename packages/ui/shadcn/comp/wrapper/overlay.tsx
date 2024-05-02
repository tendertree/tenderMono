export default function Overlay(children: React.ReactNode): JSX.Element {
    return (
        <div className="absolute top-0 left-0 pointer-events-none w-full h-full">
            {children}
        </div>
    )
}
