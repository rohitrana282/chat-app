import React from 'react';
import { Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';

const SignIn = () => {
  const onFacebookSignIn = () => {};
  const onGoogleSignIn = () => {};

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>
              <div className="mt-3">
                <Button block color="blue">
                  <Icon icon="facebook" className="mr-1" />
                  Continue with Facebook
                </Button>
                <Button block color="green">
                  <Icon icon="google" className="mr-1" />
                  Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
