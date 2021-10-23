import React from "react";
import { Container, Aside, Text, Image, Content, Button, Form, FormGroup, Label, FormInput } from "./style";
import { ReactComponent as SignupImg } from "../../assets/images/signup.svg";
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { NavLink, Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

export default function Signup({ darkTheme, restProps }) {
  return (
    <Container {...restProps}>
      <Aside>
        <Text>
          <h3>Buy and Sell</h3>
          <p>Bitcoins and Giftcard</p>
        </Text>
        <Image>
          <SignupImg />
        </Image>
      </Aside>
      <Content darkTheme={darkTheme}>
        <nav className="d-flex flex-row justify-content-center align-items-center">
          <NavLink to={ROUTES.SIGNUP} activeClassName="active">Sign up</NavLink>
          <NavLink to={ROUTES.SIGNIN} activeClassName="active">Sign in </NavLink>
        </nav>
        <p>please login your information</p>
        <Button variant="large"><span><Google /></span> Sign in with Google</Button>
        <div className="or-cont">
          <div />
          <div className="or">Or</div>
          <div />
        </div>
        <Form id="signup" darkTheme={darkTheme}>
          <FormGroup>
            <Label>Name</Label>
            <FormInput darkTheme={darkTheme} type="text" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label>Number</Label>
            <FormInput darkTheme={darkTheme} type="text" name="number" required />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <FormInput darkTheme={darkTheme} type="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <FormInput darkTheme={darkTheme} type="password" name="password" placeholder="Enter password" required />
          </FormGroup>
          <div className="d-flex justify-content-end align-align-items-center fp-text"><Link to="#">Forgot Password?</Link></div>
          <Button type="submit" form="signup" variant="small">Start</Button>
        </Form>
      </Content>
    </Container>
  );
}
