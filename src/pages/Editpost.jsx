import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function Editpost() {
  const [post, setPost] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post)
        }
      })
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  return post ? (
    <div className="py-10">
      <Container>
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Edit Post
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Update your post details and save changes
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : null
}

export default Editpost
