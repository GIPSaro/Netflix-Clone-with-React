import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import avatar from "../img/avatar.png";
import { PencilFill } from "react-bootstrap-icons";

export const ProfilePage = () => (
  <main className="custom-container vh-100 text-light">
    <h1 className="display-4 fw-semibold">Edit Profile</h1>
    <hr />
    <Row className="mt-4">
      <Col xs={4} className="d-flex flex-column justify-content-between">
        <div className="position-relative">
          <img
            className="rounded"
            src={avatar}
            alt="User Avatar"
            width="125px"
          />
          <div
            id="edit-icon"
            className="bg-dark border border-l rounded-circle p-2 position-absolute bottom-0 start-0 mb-2 ms-2 d-flex justify-content-center align-items-center"
          >
            <PencilFill size={"10px"} className="position-absolute" />
          </div>
        </div>
        <Button
          type="button"
          className="btn-light btn-sm fs-6 mb-4 me-3 rounded-0 lett-spa fw-bold"
        >
          SAVE
        </Button>
      </Col>
      <Col xs={8}>
        <div className="input-group mb-3">
          <input
            id="username"
            className="bg-secondary border-0 p-2 text-light"
            type="text"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            defaultValue="Strive Student"
          />
        </div>
        <h4 className="fs-6 text-light">Language:</h4>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="border border-white rounded-1 bg-dark"
          >
            English
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item eventKey="English">English</Dropdown.Item>
            <Dropdown.Item eventKey="Italian">Italian</Dropdown.Item>
            <Dropdown.Item eventKey="Spanish">Spanish</Dropdown.Item>
            <Dropdown.Item eventKey="French">French</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr />
        <h4 className="fs-5 text-light">Maturity Settings:</h4>
        <Button type="button" className="btn-secondary py-1 my-2 fs-6">
          ALL MATURITY RATINGS
        </Button>
        <p className="small">
          Show titles of all maturity ratings for this profile.
        </p>
        <Button
          variant="outline-secondary"
          className=" fs-6 mb-4 me-3 rounded-0 lett-spa"
        >
          EDIT
        </Button>
        <hr />
        <h4 className="fs-5 text-light">Autoplay Controls:</h4>
        <div className="form-check mb-4 d-flex align-items-center">
          <Form>
            <Form.Check
              type="checkbox"
              id="custom-check"
              label="Autoplay next episode in a series on all devices."
              className="p-3"
            />
            <Form.Check
              type="checkbox"
              id="custom-check"
              label=" Autoplay previews while browsing on all devices."
              className="p-3"
            />
          </Form>
        </div>
        <hr />
        <Button
          variant="outline-secondary"
          className=" fs-6 mb-4 me-3 rounded-0 lett-spa"
        >
          CANCEL
        </Button>
        <Button
          variant="outline-secondary"
          className=" fs-6 mb-4 me-3 rounded-0 lett-spa"
        >
          DELETE PROFILE
        </Button>
      </Col>
    </Row>
  </main>
);

export default ProfilePage;
