type NavbarProps = {
    items: { name: string, link: string }[];

}

export function Navbar({
    items,
    children
}: React.PropsWithChildren<NavbarProps>): JSX.Element {
    return (
        <div className="flex align-middle justify-between">
            <div className="bg-blue-200">sns</div>
            <div className="flex-1 text-center text-xl font-bold">logo</div>
            <div className="flex gap-20 flex-1 text-md justify-center ">
                {items.map((item, index) => (
                    <div key={index} className="">
                        <a href={item.link}>{item.name}</a>
                    </div>
                ))}
                {children ? <div className="flex-1">{children}</div> : null}
            </div>




        </div>
    )
}
