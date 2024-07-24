const express = require('express');
const router = express.Router();
// const { getUsers, 
//         signup, 
//         login,
//         updateUser,
//         deleteUser
// } = require('../controllers/userController');

// test user route
router.get('/', (req, res) => {
    res.send('User route is working!');
});

//get list of all users
// router.get('/all', getUsers);
// router.post('/signup', signup);
// router.post('/login', login);
// router.put('/update', updateUser);
// router.delete('/delete', deleteUser);



module.exports = router;
