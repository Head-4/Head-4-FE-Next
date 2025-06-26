import React from 'react'
import CrossFillIcon from '@/assets/CrossFillIcon.svg'

interface ChipProps {
  children: string
  onClick: () => void
}

function Chip({ children, onClick }: ChipProps) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-[20px] border border-gray-lightGray py-1.75 pr-3 pl-4.5">
      <span className="typography-B1_semibold text-gray-600">{children}</span>
      <button
        onClick={onClick}
        className="text-gray-300 transition-colors duration-100 ease-in-out hover:text-blue-primary active:text-blue-primary"
      >
        <CrossFillIcon className="w-6"/>
      </button>
    </div>
  )
}

export default Chip
