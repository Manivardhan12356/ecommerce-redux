import mongoose from 'mongoose';

const connectDB = async () => {
   try {
      const url = 'mongodb+srv://manivardhan12356:mani!vardhan1428@ecommercedata.11fcaed.mongodb.net/ecommercedata?retryWrites=true&w=majority';
      if (!url) {
         throw new Error('MongoDB connection URL is not defined');
      }

      const options = {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         // Additional mongoose options if required
      };

      const con = await mongoose.connect(url, options);
      console.log(`MongoDB connected: ${con.connection.host}`);
   } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
   }
};

export default connectDB;
