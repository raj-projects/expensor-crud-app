import mongoose from "mongoose";

async function connect() {
    await mongoose.connect(
      'mongodb+srv://rahulraj90:Admin123@expensor-app.qihb9hj.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('MongoDB connected successfully!');
}

export default connect;