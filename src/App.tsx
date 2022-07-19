import { gql, useQuery } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { PostData, RequestData } from './infra/interfaces'
import { GlobalStyles } from './styles/GlobalStyles'
import { AppContainer, AppContent } from './styles/styles'

const GET_POSTS_QUERY = gql`
  query {
    posts(orderBy: publishedAt_DESC) {
      appUrl
      description
      title
      type
      videoId
      createdAt
      repositoryUrl
      heroImage {
        url
      }
    }
  }
`

export function App() {
  const { data } = useQuery<RequestData>(GET_POSTS_QUERY)
  const [searchedPosts, setSearchedPosts] = useState<PostData[]>([])

  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    const searchLowerCased = event.target.value.toLowerCase()

    const posts = data?.posts.filter((post) =>
      post.title.toLowerCase().includes(searchLowerCased),
    )

    posts ? setSearchedPosts(posts) : setSearchedPosts([])
  }

  return (
    <>
      <Header />
      <AppContainer>
        <Sidebar onSearch={handleSearchInput} />
        <AppContent>
          {searchedPosts.length > 0
            ? searchedPosts.map((post) => (
              <Post
                key={post.id}
                appUrl={post.appUrl}
                description={post.description}
                title={post.title}
                type={post.type}
                videoId={post?.videoId}
                createdAt={post.createdAt}
                heroImageUrl={post.heroImage?.url}
                repositoryUrl={post.repositoryUrl}
              />
            ))
            : data?.posts.map((post) => (
              <Post
                key={post.id}
                appUrl={post.appUrl}
                description={post.description}
                title={post.title}
                type={post.type}
                videoId={post?.videoId}
                createdAt={post.createdAt}
                heroImageUrl={post.heroImage?.url}
                repositoryUrl={post.repositoryUrl}
              />
            ))}
        </AppContent>
      </AppContainer>

      <GlobalStyles />
    </>
  )
}
