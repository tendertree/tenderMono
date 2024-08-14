import { Button } from "@ui/custom/src/button";
import Circle from "@ui/shadcn/base/circle";
export default function Home() {
    return (
        <div >
            <main>
                <Button appName={"btn"}>this is button</Button>
                <div className="bg-blue-100"> this is tailwind</div>
                <Circle></Circle>
            </main>
            <footer></footer>
        </div>
    );
}
