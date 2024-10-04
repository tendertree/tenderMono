import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@ui/base/shadcn/card"
import { Button } from "@ui/base/shadcn/button"
import { Eye, Heart } from "lucide-react"
export function ArticleCardT() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Breaking News: AI Revolutionizes Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Published on October 4, 2024 by John Doe</p>
                <p>Artificial Intelligence is making unprecedented strides in the healthcare industry, promising to transform patient care, diagnosis, and treatment planning...</p>
                <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center">
                        <Eye className="h-5 w-5 mr-1" />
                        <span>1.5k views</span>
                    </div>
                    <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-1" />
                        <span>230 likes</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Read More</Button>
            </CardFooter>
        </Card>
)
}

import Image from "next/image"

export  function  ArticleCardTI(){
  return (
    <Card className="max-w-2xl mx-auto overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-1/3 h-48 sm:h-auto p-4 flex items-center justify-center">
          <div className="relative w-full h-full max-w-[160px] max-h-[160px]">
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="AI in Healthcare"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col sm:w-2/3">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Breaking News: AI Revolutionizes Healthcare</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-full">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">Published on October 4, 2024 by John Doe</p>
            <p className="text-sm flex-grow">Artificial Intelligence is making unprecedented strides in the healthcare industry, promising to transform patient care, diagnosis, and treatment planning. Recent breakthroughs in machine learning algorithms have enabled AI systems to analyze medical images with unprecedented accuracy, potentially catching diseases in their early stages and improving patient outcomes.</p>
            <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span className="text-xs sm:text-sm">1.5k views</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span className="text-xs sm:text-sm">230 likes</span>
                </div>
              </div>
              <Button size="sm" className="ml-auto">Read More</Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}


