"use client";
import React from "react";
import Earth from "@feature/three/gallery/Earth";
import  {ArtWorkGallery ,  ArtworkGalleryExample } from "@ui/portfolio/artwork/ArtHistory";
import CanvasTypeing from "@feature/konvas/write/CanvasTypeing";
import NextClientLoader from "@feature/konvas/src/NextClientLoader";


export default function Home() {
    return (
        <div className="h-screen ">
            <Earth/>
			<NextClientLoader/>
			<ArtWorkGallery artworks={ArtworkGalleryExample} />
        </div>
    );
}
