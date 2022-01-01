import { useRouter } from 'next/router'

function Login() {
    const router = useRouter()

    return (
        <div>
            <h1>Se connecter</h1>
            <button onClick={() => localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDBiODQwOWJiYjIyYzVkOWI1YmVjMyIsImlhdCI6MTY0MTA2ODYwOCwiZXhwIjoxNjQxNjczNDA4fQ.9GvyHQlrqSxA1LaTH-6rEoYhTj7d4LaxwR0n8dh605Y")} >
                Token
            </button>
            <button onClick={() => router.back()}>Revenir</button>
        </div>
    )
}

export default Login