import React, { useState } from 'react'

import SearchInput from '../components/search/input'
import RecentSearchList from '../components/search/recent-search-list'

function SearchPage() {
  const [keywords, setKeywords] = useState([
    { id: 0, label: '아이유' },
    { id: 1, label: '금요일에 만나요' },
  ])

  const handleAddKeyword = (keyword) => {
    setKeywords([
      ...keywords,
      {
        id: Date.now(),
        label: keyword,
      },
    ])
  }

  const handleRemoveKeyword = (id) => {
    setKeywords(
      keywords.filter((keyword) => {
        return keyword.id !== id
      }),
    )
  }

  const handleClearList = () => {
    setKeywords([])
  }

  return (
    <div>
      <SearchInput keywords={keywords} onAddKeyword={handleAddKeyword} />
      <RecentSearchList
        keywords={keywords}
        onClearList={handleClearList}
        onRemoveKeyword={handleRemoveKeyword}
      />
    </div>
  )
}

export default SearchPage
