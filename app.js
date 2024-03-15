const express = require('express');
const app = express();
const port = 3000;
console.log('Connected to MongoDB');

app.use(express.json());

app.use('/api/generic', require('./routes'))

// app.get('/', async (req, res) => {
//   try {
//     const db = await getData('CUED_Nodejs', 'curd');
//     const item = await db.find().toArray();

//     if (item) {
//       res.json(item);
//     } else {
//       res.status(404).json({ error: 'Item not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching item by id:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Get all with pagination
// app.get('/api/items', async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 10;

//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;

//   try {
//     const db = await getData('CUED_Nodejs', 'curd');
//     const totalItems = await db.countDocuments();
//     const items = await db.find().skip(startIndex).limit(limit).toArray();

//     res.json({
//       totalItems,
//       totalPages: Math.ceil(totalItems / limit),
//       currentPage: page,
//       items,
//     });
//   } catch (error) {
//     console.error('Error fetching items:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Get by id
// app.get('/api/items/:id', async (req, res) => {
//   const itemId = req.params.id;

//   try {
//     const db = await getData('CUED_Nodejs', 'curd');
//     const item = await db.findOne({ id: itemId });

//     if (item) {
//       res.json(item);
//     } else {
//       res.status(404).json({ error: 'Item not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching item by id:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Add
// app.post('/api/items/add', async (req, res) => {
//   const newItem = req.body;

//   try {
//     const db = await getData('CUED_Nodejs', 'curd');
//     const result = await db.insert(newItem);
//     res.json({ success: true, insertedId: result.insertedId, data: newItem });
//   } catch (error) {
//     console.error('Error adding item:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Update
// app.put('/api/items/update/:id', async (req, res) => {
//   const itemId = req.params.id;
//   const updatedItem = req.body;

//   try { 
//     const db = await getData('CUED_Nodejs', 'curd');
//     const result = await db.updateOne({ id: itemId }, { $set: updatedItem });

//     if (result.matchedCount > 0) {
//       res.json({ success: true, message: 'Item updated successfully', data: updatedItem });
//     } else {
//       res.status(404).json({ success: false, error: 'Item not found in update' });
//     }
//   } catch (error) {
//     console.error('Error updating item:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Delete by id
// app.delete('/api/items/delete/:id', async (req, res) => {
//   const itemId = req.params.id;

//   try {
//     const db = await getData('CUED_Nodejs', 'curd');
//     // let db = await Connect()
//     const result = await db.deleteOne({ id: itemId });

//     if (result.deletedCount > 0) {
//       res.json({ success: true, message: 'Item deleted successfully' });
//     } else {
//       res.status(404).json({ success: false, error: 'Item not found' });
//     }
//   } catch (error) {
//     console.error('Error deleting item:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
