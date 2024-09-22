export interface PostProp {
  title: string
  subject: string
  imageUrl: string
  date: string
  description: string
  views: number
  likes: number
  isNew?: boolean
  isUpdated?: boolean
}

export interface PostListProp { 
	data: PostProp[];
}
