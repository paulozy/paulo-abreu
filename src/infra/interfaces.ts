export interface RequestData {
  posts: [
    {
      id: string
      appUrl: string
      description: string
      title: string
      type: string
      videoId: string
      createdAt: string
      repositoryUrl: string
      heroImage: {
        url: string
      }
    },
  ]
}

export interface PostData {
  id: string
  appUrl: string
  description: string
  title: string
  type: string
  videoId: string
  createdAt: string
  repositoryUrl: string
  heroImage: {
    url: string
  }
}
