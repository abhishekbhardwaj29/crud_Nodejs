const express = require('express')
const router = express.Router()
const {create, createbyPage, createById, addData, updateData, deleteData} = require('./controller')

router.route('/:collectionName').get(create).post(addData);

router.route('/item/:collectionName').get(createbyPage);

router.route('/:collectionName/:id').get(createById).put(updateData).delete(deleteData);

// router.route('/:dbname/:collectionName').post(addData);

// router.route('/:id').put(updateData);

// router.route('/:id').delete(deleteData);

module.exports = router
