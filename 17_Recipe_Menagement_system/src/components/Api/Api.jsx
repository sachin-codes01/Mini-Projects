import { useState, useEffect } from "react"

const Api = ({ search, setData, setLoading, setError, setHasSearched }) => {
  const [debouncedSearch, setDebouncedSearch] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)
    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true)
      setError('')
      setHasSearched(false)

      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedSearch}`)
        if (!response.ok) {
          throw new Error('Kuch gadbad hui. Dobara try karo.')
        }
        const ApiData = await response.json()
        console.log(ApiData.meals)

        if (ApiData.meals === null) {
          setData([])
        } else {
          setData(ApiData.meals)
        }

        setHasSearched(true)

      } catch (error) {
        setError(error.message || 'Data load nahi hua.')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    if (debouncedSearch) {
      fetchData()
    } else {
      setData([])
      setLoading(false)
      setError('')
      setHasSearched(false)
    }

  }, [debouncedSearch])

  return (
    <div>
    </div>
  )
}

export default Api
