import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { getUserProfile, updateUserProfile } from '../services/api';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserProfile();
        setProfile(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    if (avatar) {
      formData.append('avatar', avatar);
    }

    try {
      const res = await updateUserProfile(formData);
      setProfile(res.data);
      setIsEditing(false); // Exit edit mode after saving
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2>Profile</h2>
          {!isEditing ? (
            <div>
              <Row>
                <Col md="4">
                  {profile.avatar && (
                    <img 
                      src={`http://localhost:5000/uploads/${profile.avatar}`} 
                      alt="Avatar" 
                      style={{ width: '150px', height: '150px' }} 
                    />
                  )}
                </Col>
                <Col md="8">
                  <p><strong>First Name:</strong> {profile.firstName}</p>
                  <p><strong>Last Name:</strong> {profile.lastName}</p>
                </Col>
              </Row>
              <Button variant="primary" onClick={() => setIsEditing(true)}>Edit</Button>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md="4">
                  <Form.Group controlId="formAvatar">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control 
                      type="file" 
                      onChange={(e) => setAvatar(e.target.files[0])} 
                    />
                    {profile.avatar && (
                      <div>
                        <img 
                          src={`http://localhost:5000/uploads/${profile.avatar}`} 
                          alt="Avatar" 
                          style={{ width: '150px', height: '150px', marginTop: '10px' }} 
                        />
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md="8">
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)} 
                      placeholder="Enter first name" 
                    />
                  </Form.Group>

                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={lastName} 
                      onChange={(e) => setLastName(e.target.value)} 
                      placeholder="Enter last name" 
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="primary" type="submit">
                Save
              </Button>
              <Button variant="secondary" onClick={() => setIsEditing(false)} className="ml-2">
                Cancel
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
