'use client'

import {
  Combobox as HeadlessComboBox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { cn } from '@/shared/lib/utils'
import Separator from '@/shared/ui/Separator'
import { useCombobox } from '@/shared/hooks/useCombobox'

interface ComboboxProps {
  items: string[]
  placeholder?: string
  selectedItem: string | null
  onItemSelectAction: (item: string | null) => void
}

export default function Combobox({
  items,
  placeholder = '검색',
  selectedItem,
  onItemSelectAction,
}: ComboboxProps) {
  const { setQuery, filteredItems } = useCombobox({ items })

  return (
    <HeadlessComboBox value={selectedItem} onChange={onItemSelectAction}>
      {({ open }) => (
        <div>
          <div className="relative">
            <ComboboxInput
              className={cn(
                'typography-T3_semibold w-full rounded-xl border border-gray-lightGray bg-white px-5 py-4.75 text-black placeholder-[#ADADAD] focus:border-blue-primary focus:outline-none',
                open && filteredItems.length > 0 && 'rounded-b-none border-b-0',
              )}
              displayValue={(item: string) => item}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
            />
            {open && filteredItems.length > 0 && (
              <Separator className="absolute top-[calc(100%-1px)] left-1/2 w-[90%] -translate-x-1/2" />
            )}
          </div>

          {open && filteredItems.length > 0 && (
            <div className="w-full rounded-b-xl border border-t-0 border-blue-primary bg-white px-5">
              <ComboboxOptions className="custom-scroll max-h-60 overflow-auto">
                {filteredItems.map((item) => (
                  <ComboboxOption
                    key={item}
                    value={item}
                    className={({ focus }) =>
                      cn(
                        'typography-T3_medium cursor-pointer py-5 select-none',
                        focus && 'bg-[#E9E9E940]',
                      )
                    }
                  >
                    {item}
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
