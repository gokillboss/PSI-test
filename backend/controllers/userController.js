const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


// Define your controller functions
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};



const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.remove();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error('Error fetching user profile:', err.message);
        res.status(500).send('Server Error');
    }
};

const updateUserProfile = async (req, res) => {
    const { firstName, lastName, phone } = req.body;

    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.phoneNumber = phone || user.phoneNumber;

        await user.save();
        res.status(200).json(user);
    } catch (err) {
        console.error('Error updating user profile:', err.message);
        res.status(500).send('Server Error');
    }
};



const updatePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
  
    try {
      // Find the user by ID
      let user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if current password matches
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        // Return specific error for wrong password
        return res.status(400).json({ message: 'Sai mật khẩu' });
      }
  
      // If current password matches, hash the new password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
  
      // Save updated user information
      await user.save();
  
      // Return success response
      res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
      console.error('Error updating password:', err.message);
      res.status(500).send('Server Error');
    }
  };
  





// Export the controller functions
module.exports = {
    getAllUsers,
    getUserById,
    deleteUser,
    getUserProfile,
    updateUserProfile,
    updatePassword
};
