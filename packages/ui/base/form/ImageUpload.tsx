/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState, useEffect } from "react"
import { PuffLoader } from "react-spinners"
import { ImagePlus, Trash } from "lucide-react"
import { Button } from "../shadcn/button"
import Image from "next/image"
interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    onUpload: (file: File) => void;
    value: string[];
}
export default function ImageUpload({
    disabled,
    onChange,
    onRemove,
    onUpload,
    value,
}: ImageUploadProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setIsLoading(true)
        if (!file) return;
        try {
            setIsLoading(true);
            onUpload(file);
        } catch (err) {
            console.log(err);

        } finally {
            setIsLoading(false);
        }

    }
    const handleDelete = (url: string) => {
        //api action
        onRemove(url);
        //call toast

    }

    return (<div>
        {value && value.length > 0 ? (<>
            <div className="mb-4 flex items-center gap-4">
                {value.map(url => (
                    <div className="relative w-52 h-52 rounded-md overflow-hidden" key={url}>
                        <Image
                            fill
                            className="object-cover"
                            alt="bilboard Image"
                            src={url}
                        >

                        </Image>
                        <div className="absolute z10 top-2 right-2">
                            <Button variant="destructive" size="icon" onClick={() => handleDelete(url)}>
                                <Trash className="h-4 w-4" />button</Button>
                        </div>
                    </div>
                ))
                }

            </div>
        </>) : (
            <div className="w-52 h-52 rounded-md overflow-hidden border border-dashed border-gray-200 flex items-center  justify-center flex-col gap-3">
                {isLoading ? <>
                    <PuffLoader size={30} color="#555" />
                    <p>{`${progress.toFixed(0)}%`}</p>

                </> : <>
                    <label>
                        <div className="w-full h-full flex flex-col gap-2 items-center justify-center cursor-pointer">
                            <ImagePlus className="h-4 w-4" />
                            <p>Upload an image</p>
                        </div>
                        <input
                            type="file"
                            onChange={handleUpload}
                            accept="image/*"
                            className="w-0 h-0"
                        />
                    </label>

                </>}
            </div>
        )}
    </div>);
};

