import React, { useState, useEffect } from 'react'
import { PostCard } from '../components'
import appwriteService from '../appwrite/config'

function AllPost() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  return (
    <div className="py-12">
      {/* 🔹 TITLE — CENTERED TO SCREEN */}
      <div className="w-full flex justify-center mb-10">
        <div className="max-w-[1200px] w-full px-4 text-center">
          <p className=" font-bold  text-slate-800 text-[30px]">
            All Posts
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Browse all published articles
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

export default AllPost
