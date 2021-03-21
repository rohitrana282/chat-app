import React from 'react';
import { Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';

const SignIn = () => {
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>
              <div>
                <Button block color="blue">
                  <Icon icon="facebook" />
                  <span>" "</span>Continue with Facebook
                </Button>
                <Button block color="green">
                  <Icon icon="google" />
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
