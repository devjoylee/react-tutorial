import React, { useState, useEffect } from 'react'

import SearchInput from '../components/search/input'
import RecentSearchList from '../components/search/recent-search-list'

function SearchPage() {
  const [keywords, setKeywords] = useState([])

  useEffect(() => {
    setKeywords(JSON.parse(localStorage.getItem('keywords') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

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
