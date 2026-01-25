import React, { useId } from 'react'

const Select = React.forwardRef(function Select(
  {
    options,
    label,
    className = '',
    ...props
  },
  ref
) {
  const id = useId()

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="
            mb-1 block pl-1 text-sm font-medium
            text-slate-700 dark:text-slate-300
          "
        >
          {label}
        </label>
      )}

      <select
        id={id}
        ref={ref}
        {...props}
        className={`
          w-full rounded-lg border
          border-slate-300 dark:border-slate-700
          bg-white dark:bg-slate-800
          px-3 py-2
          text-slate-900 dark:text-slate-100
          outline-none
          transition-all duration-200
          focus:border-indigo-500
          focus:ring-2 focus:ring-indigo-500/30
          disabled:cursor-not-allowed disabled:opacity-60
          ${className}
        `}
      >
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
})

export default Select
