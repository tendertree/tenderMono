"use client"
import { Suspense, useEffect, useState } from "react"
import { Sections as data } from "./data"
import { Section } from "@ui/shadcn/comp/section/section"
import { Intro } from "@/src/sections/intro";
import { Normal } from "@/src/sections/normal";
import { Last } from "@/src/sections/last";
import React from "react";

export default function Feature(): JSX.Element {
    /*
     * 별개의 section들을 불러와서 각각 다른 section을 보여준다 
     */
    const ComponentArray: ((props: { data: Section }) => JSX.Element)[] = [Intro, Normal];

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {data.map((item, index) => {
                const Component = ComponentArray[index === 0 ? 0 : index];
                return Component ? (
                    <React.Fragment key={index}>
                        {Component({ data: item })}
                    </React.Fragment>
                )
                    : (null);
            })}
        </Suspense>
    )
}
