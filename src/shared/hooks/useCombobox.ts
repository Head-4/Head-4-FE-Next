import { useState } from 'react'

interface UseComboboxProps {
  items: string[]
}

export const useCombobox = ({ items }: UseComboboxProps) => {
  const [query, setQuery] = useState('')

  const filteredItems =
    query === '' ? [] : items.filter((item) => item.includes(query))

  return {
    query,
    setQuery,
    filteredItems,
  }
}
