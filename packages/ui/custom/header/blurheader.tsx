import Logo from "../basic/Logo";
import Button from "../button/roundButton";

export default function Header(): JSX.Element {
    return (
        <header className="h-[80px] bg-main/10 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10 flex items-center ">
            <div className="container mx-auto flex justify-between items-center px-6 xl:px-0">
                <Logo />
                <Button text="get Started" />
            </div>
        </header>
    )
}
