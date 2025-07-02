'use client'

import { useState } from 'react'
import {
  Combobox as HeadlessComboBox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { UNIVERSITY_LIST } from '@/shared/lib/constants'
import { cn } from '@/shared/lib/utils'
import Separator from '@/shared/ui/Separator'

export default function Combobox() {
  const [query, setQuery] = useState('')
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(
    null,
  )

  const filteredUniversities =
    query === ''
      ? []
      : Array.from(UNIVERSITY_LIST).filter((univ) => univ.includes(query))

  return (
    <HeadlessComboBox
      value={selectedUniversity}
      onChange={setSelectedUniversity}
    >
      {({ open }) => (
        <div>
          <div className="relative">
            <ComboboxInput
              className={cn(
                'typography-T3_semibold w-full rounded-xl border border-gray-lightGray bg-white px-5 py-4.75 text-black placeholder-[#ADADAD] focus:border-blue-primary focus:outline-none',
                open &&
                  filteredUniversities.length > 0 &&
                  'rounded-b-none border-b-0',
              )}
              displayValue={(university: string) => university}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="학교명 검색"
            />
            {open && filteredUniversities.length > 0 && (
              <Separator className="absolute top-[calc(100%-1px)] left-1/2 w-[90%] -translate-x-1/2" />
            )}
          </div>

          {open && filteredUniversities.length > 0 && (
            <div className="w-full rounded-b-xl border border-t-0 border-blue-primary bg-white px-5">
              <ComboboxOptions className="custom-scroll max-h-60 overflow-auto">
                {filteredUniversities.map((university) => (
                  <ComboboxOption
                    key={university}
                    value={university}
                    className={({ focus }) =>
                      cn(
                        'typography-T3_medium cursor-pointer py-5 select-none',
                        focus && 'bg-[#E9E9E940]',
                      )
                    }
                  >
                    {university}
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </div>
          )}
        </div>
      )}
    </HeadlessComboBox>
  )
}
