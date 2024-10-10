import React, { useState } from "react";
import { Modal, Form, Button, Spinner } from "react-bootstrap";
import { updatePassword } from "../services/api";

const ChangePassword = ({ show, handleClose }) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Function to handle password change
    const handlePasswordChange = async (e) => {
        e.preventDefault();

        // Validate that the new password is different from the current password
        if (newPassword === currentPassword) {
            setPasswordError("Mật khẩu mới phải khác với mật khẩu hiện tại");
            return;
        }

        // Validate that the new password matches the confirm password
        if (newPassword !== confirmPassword) {
            setPasswordError("Mật khẩu mới và xác nhận mật khẩu không khớp");
            return;
        }

        // Reset error and start the change process
        setIsChangingPassword(true);
        setPasswordError("");

        try {
            // Call the API to update the password, but no need to store the response
            await updatePassword({ currentPassword, newPassword });

            // If the password update is successful, show success modal
            setShowSuccessModal(true);
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (error) {
            // Handle error response (bad request or other API errors)
            if (error.response && error.response.status === 400) {
                const errorMessage =
                    error.response.data.message || "Sai mật khẩu hiện tại";
                setPasswordError(errorMessage);
            } else {
                setPasswordError("Có lỗi xảy ra khi đổi mật khẩu");
            }
        } finally {
            // Reset the button loading state
            setIsChangingPassword(false);
        }
    };

    // Function to handle closing the success modal
    const handleSuccessClose = () => {
        setShowSuccessModal(false);
        handleClose(); // Close the main modal after success
    };

    return (
        <div>
            {/* Main modal for changing password */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="d-flex justify-content-center align-items-center w-100">
                        Đổi mật khẩu
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handlePasswordChange}>
                        <Form.Group controlId="currentPassword" className="mb-3">
                            <Form.Label>Mật khẩu hiện tại</Form.Label>
                            <Form.Control
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Nhập mật khẩu hiện tại"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="newPassword" className="mb-3">
                            <Form.Label>Mật khẩu mới</Form.Label>
                            <Form.Control
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Nhập mật khẩu mới"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="confirmPassword" className="mb-3">
                            <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Xác nhận mật khẩu mới"
                                required
                            />
                        </Form.Group>

                        {passwordError && (
                            <div
                                style={{ color: "red", fontWeight: "bold" }}
                                className="mb-3"
                            >
                                {passwordError}
                            </div>
                        )}

                        <div className="d-flex justify-content-center align-items-center">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isChangingPassword}
                                className="w-100"
                            >
                                {isChangingPassword ? (
                                    <>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        <span className="ms-2">Đang đổi mật khẩu...</span>
                                    </>
                                ) : (
                                    "Xác nhận"
                                )}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>


            {/* Success modal */}
            <Modal show={showSuccessModal} onHide={handleSuccessClose} centered>
                <Modal.Body className="text-center">
                    <p>Đổi mật khẩu thành công!</p>
                    <Button
                        className="d-flex justify-content-center align-items-center mx-auto"
                        variant="primary"
                        onClick={handleSuccessClose}
                    >
                        Đóng
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ChangePassword;
