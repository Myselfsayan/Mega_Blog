import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { PostCard } from '../components'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="py-20">
        <h1 className="text-center text-xl font-medium text-slate-700">
          Login to read posts
        </h1>
      </div>
    )
  }

  return (
    <div className="py-12">
      {/* 🔹 TITLE — CENTERED TO SCREEN */}
      <div className="w-full flex justify-center mb-10">
        <div className="max-w-[1200px] w-full px-4 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
            Latest Posts
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Explore recently published articles
          </p>
        </div>
      </div>

      {/* 🔹 POSTS — CENTERED TO SCREEN */}
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] px-4">
          {posts.map((post) => (
            <div key={post.$id} className="w-[320px]">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
