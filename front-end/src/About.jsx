import { useEffect, useState } from 'react'
import axios from 'axios'

const About = () => {
  const [about, setAbout] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
      .then(response => setAbout(response.data))
      .catch(() => setError('Could not load the About Us information.'))
  }, [])

  if (error) return <p>{error}</p>
  if (!about) return <p>Loading…</p>

  return (
    <>
      <h1>About Us</h1>
      {about.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <img src={about.imageUrl} alt="Rania" style={{ maxWidth: '300px' }} />
    </>
  )
}

export default About