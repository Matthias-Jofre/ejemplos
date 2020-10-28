import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'products' })
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imageURL: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: Date.now })
  createAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.method('toJSON', function() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
