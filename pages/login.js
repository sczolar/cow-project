import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react"
import { useRouter } from "next/router";
import Head from 'next/head';


export default function Login() {
    const router = useRouter();
    const [Page, setpage] = useState({ loading: false, Message: "" })
    const [login, setlogin] = useState({ username: "", password: "" })

    //onchange handler for the value change
    const loginhandler = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value })
    }
    //while submit the value what would happen
    const submithandler = async () => {
        const { username, password } = login
        if (username && password) {
            try {
                setpage({ ...Page, loading: true })
                const user = await fetch("api/login", {
                    method: "POST",
                    headers: {
                        contentType: "application/json",
                    },
                    body: JSON.stringify({ username, password })
                }).then(res => {
                    return res.json();
                })
                if (user.success) {
                    localStorage.setItem("token", user.data[0].token)
                    router.push("/")
                }
                else {
                    setpage({ ...Page, loading: false, Message: user.message })
                }
            }
            catch (err) {
                setpage({ ...Page, loading: false, Message: err })
            }
        }
        else {
            setpage({ ...Page, Message: "all field required" })
        }
    }
    if (Page.loading) { return <h1>loading....</h1> }
    return (
        <div className="login">
            <Head>
                <title>Login</title>
                <meta name="description" content="login page" />
            </Head>
            <span>{Page.Message}</span>
            <div className="login-body">
                <h1>login</h1>
                <form>
                    <TextField
                        label="Username"
                        variant="standard"
                        name='username'
                        onChange={loginhandler}
                        value={login.username}
                        type="text"
                        color="primary"
                        className="login-text"
                    />
                    <TextField
                        label="Password"
                        variant="standard"
                        name='password'
                        onChange={loginhandler}
                        value={login.password}
                        type="password"
                        color="primary"
                        className="login-text"
                    />
                    <Button className='loginbtn' variant="contained" onClick={submithandler}>Login</Button>
                </form>
            </div>
        </div>
    )
}