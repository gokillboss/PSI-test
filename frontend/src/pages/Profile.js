import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { getUserProfile, updateUserProfile } from '../services/api';
import './profile.css'; 
const Profile = () => {
  const [profile, setProfile] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserProfile();
        setProfile(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setPhone(res.data.phoneNumber); 
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
    formData.append('email', email);
    formData.append('phone', phone);

    try {
      const res = await updateUserProfile(formData);
      setProfile(res.data);
      setIsEditing(false); // Exit edit mode after saving
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div className="profile-background my-5">
      <Container className="profile-container">
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card className="profile-card shadow-sm p-4">
              <div className="profile-header">
                <h2 className="profile-title">Thông Tin Cá Nhân</h2>
              </div>
              {!isEditing ? (
                <div>
                  <Row>
                    <Col md="12">
                      <p><strong>Họ tên:</strong> {profile.firstName} {profile.lastName}</p>
                      <p><strong>Email:</strong> {profile.email}</p>
                      <p><strong>Số điện thoại:</strong> {profile.phoneNumber}</p>
                    </Col>
                  </Row>
                  <Button 
                    variant="primary" 
                    onClick={() => setIsEditing(true)} 
                    className="mr-3 profile-btn"
                  >
                    Chỉnh sửa
                  </Button>
                  <Button 
                    variant="primary " 
                    className="ml-3 profile-btn"
                  >
                    Đổi mật khẩu
                  </Button>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="12">
                      <Form.Group controlId="formFirstName">
                        <Form.Label>Họ</Form.Label>
                        <Form.Control 
                          type="text" 
                          value={firstName} 
                          onChange={(e) => setFirstName(e.target.value)} 
                          placeholder="Nhập họ" 
                          className="form-input"
                        />
                      </Form.Group>

                      <Form.Group controlId="formLastName">
                        <Form.Label>Tên</Form.Label>
                        <Form.Control 
                          type="text" 
                          value={lastName} 
                          onChange={(e) => setLastName(e.target.value)} 
                          placeholder="Nhập tên" 
                          className="form-input"
                        />
                      </Form.Group>

                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          placeholder="Nhập email" 
                          className="form-input"
                        />
                      </Form.Group>

                      <Form.Group controlId="formPhone">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control 
                          type="text" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                          placeholder="Nhập số điện thoại" 
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button variant="primary" type="submit" className="mr-3">
                    Lưu
                  </Button>
                  <Button variant="secondary" onClick={() => setIsEditing(false)}>
                    Hủy
                  </Button>
                </Form>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
