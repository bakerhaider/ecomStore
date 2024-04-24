import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: { rate: String, count: Number }, required: true },
});

const Product = models?.Product || model('Product', ProductSchema);

export default Product;
