import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';  
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./CustomBtn.css"
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


const SignInForm = () => {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const PostData = () => {
        const emailMessage = () => toast("Eeek, Invalid Email Address", {
            type: "error",
            pauseOnHover: false
        })
        if (
          !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          )
        ) {
          emailMessage();
        }
        fetch("signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const errorMessage = () => toast(data.error, {
                type: "error",
                pauseOnHover: false,
            })
            const successMessage = () => toast("sign in successfully, please wait...", {
                type: "success",
                pauseOnHover: false
            })

            if (data.error) {
                errorMessage();
            } else {
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                successMessage();
                setTimeout(() => {
                    history.push("/")
                },2000)
            }
        }).catch(err => {
            console.log(err);
        })
    }
    return(
        <Form>
            <div className={"card-body"}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input 
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="enter your email address"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input 
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="enter your password"
                    />
                </FormGroup>
                <Button
                    className="afri-btn btn-block mb-3"
                    onClick={(e) => e.preventDefault(PostData())}
                >Sign In</Button>
                <small>Don't have an account? <Link to="/signup">Create an account now</Link></small>
            </div>
            <ToastContainer />
        </Form>
    )
}

export default SignInForm;