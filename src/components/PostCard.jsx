import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block">
      <div
        className="
          rounded-2xl
          bg-white
          border border-slate-200
          shadow-sm
          hover:shadow-md
          transition-shadow
        "
      >
        {/* Image */}
        <div className="p-3">
          <div className="overflow-hidden rounded-xl bg-slate-100">
            <img
              src={appwriteService.getFileView(featuredImage)}
              alt={title}
              className="w-full h-48 object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-5 flex flex-col text-center items-center">
          <p
            className="
              text-lg font-semibold
              text-slate-800
              leading-snug
            "
          >
            {title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
