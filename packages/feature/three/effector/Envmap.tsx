import { useEnvironment, Environment } from "@react-three/drei";
import React from "react";
export default function Envmap() {
 return <Environment files={"puresky.hdr"} path={"/texture/"} background />;
}
