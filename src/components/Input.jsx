import React, { useId } from 'react'

const Input = React.forwardRef(function Input(
  {
    label,
    type = 'text',
    className = '',
    ...props
  },
  ref
) {
  const id = useId()

  return (
    <div className="w-[50vh]  space-y-1 mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        ref={ref}
        type={type}
        className={`
          w-full
          rounded-lg
          border border-gray-300
          bg-white
          px-4 py-2.5
          text-black
          outline-none
          transition-all duration-200
          focus:border-indigo-500
          focus:ring-2 focus:ring-indigo-500/30
          ${className}
        `}
        {...props}
      />
    </div>
  )
})

export default Input
