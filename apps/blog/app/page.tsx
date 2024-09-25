"use client";
import React from "react";
import Earth from "@feature/three/gallery/Earth";
import  {ArtWorkGallery ,  ArtworkGalleryExample } from "@ui/portfolio/artwork/ArtHistory";




export default function Home() {
    return (
        <div className="h-screen ">
            <Earth/>
			<ArtWorkGallery artworks={ArtworkGalleryExample} />
        </div>
    );
}
