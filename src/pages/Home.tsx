import * as React from 'react'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (path: string) => axios.get<{ message: string }>(path).then(res => res.data)

export const Home: React.FC = () => {
  const { data, error, isLoading, mutate } = useSWR('http://121.196.236.94:3000', fetcher)

  const a = () => {
    const data = await axios.post('xxx') // message: 'hi'
    mutate(data)
  }
  if (error)
    return <div>failed to load</div>
  if (isLoading)
    return <div>loading...</div>

  return <div>hello {data?.message}!</div>
}
