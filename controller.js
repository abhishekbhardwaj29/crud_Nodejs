const express = require('express')
const getData = require('./mongodbConnect')

const create = async (req, res) => {
    try {
        // const { dbName, collectionName } = req.params
        const db = await getData(req.params.collectionName);
        const item = await db.find().toArray();

        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (error) {
        console.error('Error fetching item by id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createbyPage = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const db = await getData(req.params.collectionName);

        const skip = (page - 1) * limit;

        const items = await db.find().skip(skip).limit(limit).toArray();

        const totalItems = await db.countDocuments();

        res.json({
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page,
            items,
        });
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createById = async (req, res) => {
    const itemId = req.params.id;

    try {
        // const { dbName, collectionName } = req.params
        const db = await getData(req.params.collectionName);
        const item = await db.findOne({ id: itemId });

        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (error) {
        console.error('Error fetching item by id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const addData = async (req, res) => {
    const newItem = req.body;

    try {
        // const { dbName, collectionName } = req.params
        const db = await getData(req.params.collectionName);
        const result = await db.insertOne(newItem);
        const newData = await db.find().toArray()
        res.json({ success: true, insertedId: result.insertedId, data: newItem, all: newData });
    } catch (error) {
        console.error('Error adding item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateData = async (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;

    try {
        // const { dbName, collectionName } = req.params
        const db = await getData(req.params.collectionName);
        const result = await db.updateOne({ id: itemId }, { $set: updatedItem });
        const rest = awaitdb.find().toArray()

        if (result.matchedCount > 0) {
            res.json({ success: true, message: 'Item updated successfully', data: updatedItem, all: rest });
        } else {
            res.status(404).json({ success: false, error: 'Item not found in update' });
        }
    } catch (error) {
        console.error('Error updating item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteData = async (req, res) => {
    const itemId = req.params.id;

    try {
        // const { dbName, collectionName } = req.params
        const db = await getData(req.params.collectionName);
        // let db = await Connect()
        const result = await db.deleteOne({ id: itemId });
        const all = await db.find().toArray()

        if (result.deletedCount > 0) {
            res.json({ success: true, message: 'Item deleted successfully', allData: all });
        } else {
            res.status(404).json({ success: false, error: 'Item not found' });
        }
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { create, createbyPage, createById, addData, updateData, deleteData }
