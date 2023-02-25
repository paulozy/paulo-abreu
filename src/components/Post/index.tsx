import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineWebAsset } from 'react-icons/md'
import { PostContainer, PostContent } from './styles'

interface PostProps {
  appUrl: string
  description: string
  title: string
  type: string
  videoId: string | undefined
  createdAt: string
  heroImageUrl: string
  repositoryUrl: string
}

export function Post({
  appUrl,
  description,
  createdAt,
  heroImageUrl,
  title,
  type,
  videoId,
  repositoryUrl,
}: PostProps) {
  const dateFormatted = format(new Date(createdAt), "d 'de' MMM 'de' uu", {
    locale: ptBR,
  })

  return (
    <PostContainer>
      <header>
        <h1>{title}</h1>
        <span>{dateFormatted}</span>
      </header>

      <PostContent>
        <h4>Descrição</h4>
        <p>{description}</p>

        <div>
          {videoId ? (
            <>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </>
          ) : (
            <img src={heroImageUrl} alt="" />
          )}
        </div>

        <footer>
          <a href={repositoryUrl} target="_blank" rel="noreferrer">
            <FaGithub size={24} />
            Repositório
          </a>

          <a href={appUrl} target="_blank" rel="noreferrer">
            <MdOutlineWebAsset size={24} />
            Site
          </a>
        </footer>
      </PostContent>
    </PostContainer>
  )
}
