import React, { useRef } from "react"
import "./Login.css"
import { Button } from "@material-ui/core"

const Register = props => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?username=${username.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return true
                }
                return false
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then(() => {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            username: username.current.value
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("activeUser", createdUser.id)
                                props.history.push("/")
                            }
                        })
                })
        } else {
            window.alert("Passwords do not match")
        }
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for CodeHub</h1>
                <fieldset>
                    <label htmlFor="username"> username </label>
                    <input ref={username} type="text"
                        name="username"
                        className="form-control"
                        placeholder="username"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> e-mail </label>
                    <input ref={email} type="text"
                        name="email"
                        className="form-control"
                        placeholder="email"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> password </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="password"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> verify password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="verify password"
                        required />
                </fieldset>
                <fieldset>
                    <Button color="primary" type="submit">
                        Register
                    </Button>
                </fieldset>
            </form>
        </main>
    )
}

export default Register