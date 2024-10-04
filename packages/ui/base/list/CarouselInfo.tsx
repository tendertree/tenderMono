/** Carosel component for information , tip, guidence */
    // {
    //     title: "Introduction to React Hooks",
    //     excerpt: "Learn about the power of React Hooks and how they can simplify your code.",
    //     link: "#"
    // },
    //


'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "../shadcn/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../shadcn/card"

// Define the Article type
interface Article {
  title: string;
  excerpt: string;
  link: string;
}

// Update the component to accept articles as a prop
interface ArticleCarouselProps {
  articles: Article[];
}

export default function ArticleCarousel({ articles }: ArticleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length)
  }

  const progress = ((currentIndex + 1) / articles.length) * 100

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{articles[currentIndex].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{articles[currentIndex].excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button variant="outline" asChild>
            <a href={articles[currentIndex].link}>Read More</a>
          </Button>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </Card>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Article {currentIndex + 1} of {articles.length}
      </div>
    </div>
  )
}
