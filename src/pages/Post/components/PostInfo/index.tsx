import { Link } from 'react-router-dom'
import { PostInfoContainer, PostInfoDetails } from './styles'
import {
  ArrowSquareOut,
  CaretLeft,
  GithubLogo,
  CalendarBlank,
  ChatCircle,
} from '@phosphor-icons/react'
import { dateFormatter } from '../../../../utils/formatter'

interface PostInfoProps {
  title: string
  createdAt: string
  githubUrl: string
  comments: string
  name: string
}

export function PostInfo({
  title,
  createdAt,
  githubUrl,
  comments,
  name,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <header>
        <Link to="/">
          <CaretLeft size={20} /> VOLTAR
        </Link>
        <Link to={githubUrl} target="_blank">
          VER NO GITHUB <ArrowSquareOut size={20} />
        </Link>
      </header>
      <h1>{title}</h1>
      <PostInfoDetails>
        <span>
          <GithubLogo weight="fill" size={22} />
          {name}
        </span>
        <span>
          <CalendarBlank weight="fill" size={22} />
          {createdAt && dateFormatter(createdAt)}
        </span>
        <span>
          <ChatCircle weight="fill" size={22} />
          {comments} comentários
        </span>
      </PostInfoDetails>
    </PostInfoContainer>
  )
}
