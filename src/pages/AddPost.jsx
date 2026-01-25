import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className="py-10">
      <Container>
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Create New Post
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Fill in the details below to publish a new post
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
          <PostForm />
        </div>
      </Container>
    </div>
  )
}

export default AddPost
