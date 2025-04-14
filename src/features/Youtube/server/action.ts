import { IYouTubeVideo } from "../types"

const API_KEY = process.env.YOUTUBE_API_KEY!
const CHANNEL_INFO_URL = 'https://www.googleapis.com/youtube/v3/channels'

export interface IYouTubeProfile {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  uploadsPlaylistId: string
}

export const getYouTubeChannelInfo = async (channelId: string): Promise<IYouTubeProfile | null> => {
  try {
    const res = await fetch(`${CHANNEL_INFO_URL}?part=snippet,contentDetails&id=${channelId}&key=${API_KEY}`, {
      cache: 'no-cache',
    })

    if (!res.ok) {
      console.error('YouTube API error (channel):', res.statusText)
      return null
    }

    const data = await res.json()
    const channel = data.items?.[0]

    if (!channel) return null

    return {
      id: channel.id,
      title: channel.snippet.title,
      description: channel.snippet.description,
      thumbnailUrl: channel.snippet.thumbnails?.high?.url || '',
      uploadsPlaylistId: channel.contentDetails.relatedPlaylists.uploads,
    }
  } catch (error) {
    console.error('Failed to fetch channel info:', error)
    return null
  }
}
const PLAYLIST_ITEMS_URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

export const getYouTubeVideos = async (playlistId: string): Promise<IYouTubeVideo[]> => {
  try {
    const res = await fetch(`${PLAYLIST_ITEMS_URL}?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}`, {
      cache: 'no-cache',
    })

    if (!res.ok) {
      console.error('YouTube API error (videos):', res.statusText)
      return []
    }

    const data = await res.json()
    const items  = data.items || []

    return items.map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails?.high?.url || '',
      publishedAt: item.snippet.publishedAt,
    }))
  } catch (error) {
    console.error('Failed to fetch videos:', error)
    return []
  }
}
