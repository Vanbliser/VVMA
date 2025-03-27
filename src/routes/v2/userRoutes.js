const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/auth');
const { 
  getMyProfile,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers
} = require('../../controllers/v2/userCtrl');

router.get('/me', authMiddleware, getMyProfile);
router.get('/all', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.patch('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
