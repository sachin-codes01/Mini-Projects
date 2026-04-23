import React, { useEffect, useState } from 'react'

const Api = ({ search, setData, setLoading, setError }) => {
  const [debouncedSearch, setDebouncedSearch] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)
    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedSearch}`)
        const ApiData = await response.json()
        console.log(ApiData.meals)

        if (ApiData.meals === null) {
          setError("No results found")
          setData([])
        } else {
          setData(ApiData.meals)
        }

      } catch (error) {
        console.log(error)
        setError("Something went wrong")
      } finally {
        setLoading(false)
      }
    }
    if (debouncedSearch) {
      fetchData()
    } else {
      setData([])
      setError(null)
    }
  }, [debouncedSearch]
  )

  return (
    <div>
    </div>
  )
}

export default Api