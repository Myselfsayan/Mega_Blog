import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label
          className="
            mb-2 block pl-1 text-sm font-medium
            text-slate-700 dark:text-slate-300
          "
        >
          {label}
        </label>
      )}

      <div
        className="
          overflow-hidden rounded-xl
          border border-slate-300 dark:border-slate-700
          bg-white dark:bg-slate-900
          focus-within:ring-2 focus-within:ring-indigo-500/30
          transition-all
        "
      >
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey="otj4bdwkgfbmuptsny14orgeikdbrnlg40o6thzs5cch5n06"
              initialValue={defaultValue}
              init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                content_style:
                  "body { font-family: Inter, Helvetica, Arial, sans-serif; font-size: 14px; }",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  )
}
