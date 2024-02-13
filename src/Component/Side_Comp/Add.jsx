import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Add() {
  return (
    <Form >
  <div className="d-flex justify-content-center align-items-center mt-3">
    <div className="col-md-10">

    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control type="tel" placeholder="Password" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
        <Form.Check type="checkbox" label="Accept all term and conditions" />
      </Form.Group>
      <div className='btn' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </div>
    </div>
  </div>
</Form>

  );
}

export default Add;