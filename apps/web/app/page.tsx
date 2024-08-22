import { Button } from "@ui/custom/src/button";
import Circle from "@ui/shadcn/base/circle";
import { useInsertionEffect } from "react";
export default function Home() {

  return (
    <div >
      <header>this is header</header>
      <main>
        <Button appName={"btn"}>this is  main button</Button>
        <div className="bg-blue-100"> this is tailwind</div>
        <Circle></Circle>
      </main>
      <footer>this is footer</footer>
    </div>
  );
}
