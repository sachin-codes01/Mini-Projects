import { useEffect, useState } from 'react'
import './GitHubSearch.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const GitHubSearch = () => {
    const [username, setUsername] = useState('')
    const [debouncedUsername, setDebouncedUsername] = useState('')
    const [profile, setProfile] = useState(null)
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => { setDebouncedUsername(username) }, 500)
        return () => clearTimeout(timer)
    }, [username])

    useEffect(() => {
        if (!debouncedUsername) return

        const fetchData = async () => {
            setLoading(true)
            setError(null)

            const checkRateLimit = (res) => {
                if (res.status === 403 || res.status === 429) {
                    throw new Error("⚠️ GitHub API rate limit exceeded (60 req/hour). Please wait an hour and try again.")
                }
            }

            try {
                //Search user
                const response = await fetch(`https://api.github.com/search/users?q=${debouncedUsername}`)
                checkRateLimit(response)
                const data = await response.json()

                if (!data.items || data.total_count === 0) {
                    setLoading(false)
                    setError("User Not Found")
                    return
                }

                //User details
                const userRes = await fetch(data.items[0].url)
                checkRateLimit(userRes)
                const userData = await userRes.json()

                //Repositories
                const repoRes = await fetch(`https://api.github.com/users/${userData.login}/repos?sort=updated`)
                checkRateLimit(repoRes)
                const repoData = await repoRes.json()

                setProfile(userData)
                setRepos(repoData)

            } catch (error) {
                setProfile(null)
                setRepos([])
                setError(error.message)
            }
            setLoading(false)
        }
        fetchData()
    }, [debouncedUsername])

    const handleClear = () => {
        setUsername('')
        setDebouncedUsername('')
        setProfile(null)
        setRepos([])
        setError(null)
    }

    return (
        <div className="main-container">
            <h1 className="main-heading">GitHub Search</h1>

            <div className="search-form">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Search GitHub user..." autoFocus />
                {username && (<button className="clear-btn" onClick={handleClear}>✕</button>)}
            </div>

            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}><CircularProgress /></Box>
            )}

            {error && <p className="error-msg">{error}</p>}

            {profile && (
                <div className="profile-container">
                    <div className="profile-content">
                        <img src={profile.avatar_url} alt="avatar" className="profile-avatar" />

                        <div className="profile-details">
                            <h2>{profile.name || profile.login}</h2>

                            <a href={profile.html_url} target="_blank" rel="noreferrer">@{profile.login}</a>

                            <p>{profile.bio || "No bio available"}</p>

                            <p> Joined:{" "} {new Date(profile.created_at).toDateString()} </p>

                            <div className="profile-repo">
                                <p><span>{profile.public_repos}</span>Repos</p>
                                <p><span>{profile.followers}</span>Followers</p>
                                <p><span>{profile.following}</span>Following</p>
                                <p><span>{profile.public_gists}</span>Gists</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {repos.length > 0 && (
                <div className="repo-container">
                    <h3>Recent Repositories</h3>

                    <ul className="repo-list">
                        {repos.map((repo) => (
                            <li key={repo.id} className="repo-item" onClick={() => window.open(repo.html_url, "_blank")}>
                                <h4 className="repo-title">{repo.name}</h4>

                                <p>{repo.description || "No description"}</p>

                                <div className="repo-stats">
                                    <span>⭐ {repo.stargazers_count}</span>
                                    <span>🍴 {repo.forks_count}</span>
                                    {repo.language && (<span className="repo-lang">{repo.language}</span>)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
export default GitHubSearch