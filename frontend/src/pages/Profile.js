import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Form } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import { getUserProfile, updateUserProfile } from "../services/api";
import ChangePassword from "../components/ChangePassword"; 
import "./profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false); // State to control password modal visibility

  // Function to close password modal
  const handleClosePasswordModal = () => setShowPasswordModal(false);

  // Function to open password modal
  const handleShowPasswordModal = () => setShowPasswordModal(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const res = await getUserProfile();
        setProfile(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setPhone(res.data.phoneNumber);
      } catch (error) {
        console.error("Error fetching profile", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);

    try {
      const res = await updateUserProfile(formData);
      setProfile(res.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="profile-page d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Đang tải...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <Container fluid>
        <Row className="justify-content-center mt-5 min-vh-100">
          <Col md={8} lg={6} xl={5}>
            <div className="profile-card">
              <div className="profile-header d-flex justify-content-between align-items-center">
                <h1>Thông Tin Cá Nhân</h1>
                {!isEditing && (
                  <Button
                    variant="link"
                    onClick={() => setIsEditing(true)}
                    className="edit-button"
                    disabled={isSaving}
                  >
                    <PencilSquare size={40} />
                  </Button>
                )}
              </div>
              <div className="profile-body">
                {!isEditing ? (
                  <div className="profile-info">
                    <div className="info-item">
                      <span className="info-label">Họ tên</span>
                      <span className="info-value">
                        {profile.firstName} {profile.lastName}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email</span>
                      <span className="info-value">{profile.email}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Số điện thoại</span>
                      <span className="info-value">{profile.phoneNumber}</span>
                    </div>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFirstName" className="mb-3">
                      <Form.Label>Họ</Form.Label>
                      <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Nhập họ"
                        disabled={isSaving}
                      />
                    </Form.Group>

                    <Form.Group controlId="formLastName" className="mb-3">
                      <Form.Label>Tên</Form.Label>
                      <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Nhập tên"
                        disabled={isSaving}
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email"
                        disabled={isSaving}
                      />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="mb-4">
                      <Form.Label>Số điện thoại</Form.Label>
                      <Form.Control
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Nhập số điện thoại"
                        disabled={isSaving}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-between">
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={isSaving}
                      >
                        {isSaving ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            <span className="ms-2">Đang lưu...</span>
                          </>
                        ) : (
                          "Lưu thay đổi"
                        )}
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={() => setIsEditing(false)}
                        disabled={isSaving}
                      >
                        Hủy
                      </Button>
                    </div>
                  </Form>
                )}
              </div>
              <div className="profile-footer">
                <Button
                  variant="outline-primary"
                  className="change-password-btn"
                  onClick={handleShowPasswordModal} // Opens the password modal
                  disabled={isEditing || isSaving}
                >
                  Đổi mật khẩu
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Call ChangePassword component */}
      <ChangePassword
        show={showPasswordModal}
        handleClose={handleClosePasswordModal}
        className="d-flex justify-content-center align-items-center mx-auto"
      />
    </div>
  );
};

export default Profile;
