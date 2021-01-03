import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
    const history = useHistory();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNo, setMobieNo] = useState("")
    const [password, setPassword] = useState("")
    const [state, setState] = useState("")
    const [examCategory, setExamCategory] = useState("")

    const uploadFields = () => {
        const emailMessage = () => toast("Eek, Invalid Email Address!", {
            type: "error",
            pauseOnHover: false
        })
        const passwordMessage = () => toast("Eek, password must be greater than 6 digits!", {
            type: "error",
            pauseOnHover: false
        })
        const mobileNoMessage = () => toast("Eek, Invalid mobile no", {
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
        if (password.length < 6) {
            passwordMessage();
        }
        if (mobileNo.length < 11) {
            mobileNoMessage();
        }

        fetch("signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                password,
                mobileNo,
                state,
                email,
                examCategory
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const notify = () => toast(data.error, {
                type: "error",
                pauseOnHover: false
            })
            const notifySuccess = () => toast(data.message, {
                type: "success",
                pauseOnHover: false

            })
            if (data.error) {
                notify();
            }else{
                notifySuccess();
                setTimeout(() => {
                    history.push("/signin");
                },2000)
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return (
      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="enter your first name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="enter your last name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email Address</Label>
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
          <Label for="mobileNo">Mobile No</Label>
          <Input
            type="number"
            name="number"
            id="number"
            value={mobileNo}
            onChange={(e) => setMobieNo(e.target.value)}
            placeholder="enter your mobile number"
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

        <FormGroup>
          <Label for="state">State</Label>
          <Input 
          type="select"
           name="select" 
           id="state"
           value={state}
           onChange={(e) => setState(e.target.value)}
           >
            <option>-- Select One --</option>
            <option>lagos</option>
            <option>abuja</option>
            <option>oyo</option>
            <option>ogun</option>
            <option>calabar</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="examCategory">Exam Category</Label>
          <Input 
          type="select" 
          name="select" 
          id="examCategory"
          value={examCategory}
          onChange={(e) => setExamCategory(e.target.value)}
          >
            <option>-- Select One --</option>
            <option>waec</option>
            <option>neco</option>
            <option>professional</option>
            <option>undergraduate</option>
          </Input>
        </FormGroup>
        <hr />
        <Button
            className="afri-btn btn-block mb-3"
            onClick={(e) => e.preventDefault(uploadFields())}
        >
            Sign Up
        </Button>
        <small>
            Already have an account? <Link to="/signin">Sign in here</Link>
        </small>
        <ToastContainer />
      </Form>
    );
}

export default SignUpForm;