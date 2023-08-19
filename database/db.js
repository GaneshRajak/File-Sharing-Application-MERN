import mongoose from 'mongoose';


const DBConnection = async () => {
    const MONODB_URI = `mongodb://Ganesh:Ganesh123@ac-ckpbdpx-shard-00-00.uwb3stj.mongodb.net:27017,ac-ckpbdpx-shard-00-01.uwb3stj.mongodb.net:27017,ac-ckpbdpx-shard-00-02.uwb3stj.mongodb.net:27017/?ssl=true&replicaSet=atlas-p09gzr-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;