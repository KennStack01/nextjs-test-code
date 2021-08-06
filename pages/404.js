import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        // Redirect to the home page 
        setTimeout(() => {
            router.push('/')
        }, 3000)

    }, [router])

    return (
    <div className="not-found">
        <h1>Ooops...</h1>
        <h2>That page cannot be found :(</h2>
        <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
    )
}

export default NotFound