import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const [userdata, setUserdata] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState({})
  const navigate = useNavigate()

  
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserdata((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  
  const handleFormSubmit = (e) => {
    e.preventDefault()

    let newError = {}

   
    if (!userdata.email) {
      newError.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(userdata.email)) {
      newError.email = "Invalid email format"
    }

    if (!userdata.password) {
      newError.password = "Password is required"
    } else if (userdata.password.length < 6) {
      newError.password = "Password must be at least 6 characters"
    }

    
    if (Object.keys(newError).length > 0) {
      setError(newError)
      return
    }

  
    if (
      userdata.email.trim() === "riya@gmail.com" &&
      userdata.password.trim() === "pass@123"
    ) {
      localStorage.setItem("isLogin", "true")
      navigate("/")
    } else {
      alert("Invalid credentials")
    }

    
    setError({})
    setUserdata({ email: "", password: "" })
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Login</h2>

          <Form onSubmit={handleFormSubmit}>

           
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={userdata.email}
                onChange={handleChange}
                isInvalid={!!error.email}
              />
              <Form.Control.Feedback type="invalid">
                {error.email}
              </Form.Control.Feedback>
            </Form.Group>

           
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={userdata.password}
                onChange={handleChange}
                isInvalid={!!error.password}
              />
              <Form.Control.Feedback type="invalid">
                {error.password}
              </Form.Control.Feedback>
            </Form.Group>

            
            <Button variant="danger" type="submit" className="w-100">
              Login
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>
  )
}