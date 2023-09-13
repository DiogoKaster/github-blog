import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../../../lib/axios'
import {
  ProfileContainer,
  ProfileContent,
  ProfileContentHeader,
  ProfileDetails,
} from './styles'
import {
  ArrowSquareOut,
  GithubLogo,
  Users,
  Buildings,
} from '@phosphor-icons/react'

interface ProfileProps {
  name: string
  login: string
  avatarUrl: string
  bio: string
  followers: number
  githubUrl: string
  company?: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({
    name: '',
    login: '',
    avatarUrl: '',
    bio: '',
    followers: 0,
    githubUrl: '',
    company: '',
  })

  async function fetchProfile() {
    const response = await api.get('/users/DiogoKaster')

    setProfile({
      name: response.data.name,
      login: response.data.login,
      avatarUrl: response.data.avatar_url,
      bio: response.data.bio,
      followers: response.data.followers,
      githubUrl: response.data.html_url,
      company: response.data.company,
    })
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContainer>
      <img src={profile.avatarUrl} alt={profile.name} />
      <ProfileContent>
        <ProfileContentHeader>
          <h1>{profile.name}</h1>
          <Link to={profile.githubUrl} target="_blank" rel="noreferrer">
            GITHUB
            <ArrowSquareOut size={20} />
          </Link>
        </ProfileContentHeader>
        <p>{profile.bio}</p>
        <ProfileDetails>
          <span>
            <GithubLogo weight="fill" size={22} />
            {profile.login}
          </span>
          {profile.company && (
            <span>
              <Buildings weight="fill" size={22} />
              {profile.company}
            </span>
          )}
          <span>
            <Users weight="fill" size={22} />
            {profile.followers} followers
          </span>
        </ProfileDetails>
      </ProfileContent>
    </ProfileContainer>
  )
}
