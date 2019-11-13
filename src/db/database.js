import mongoose from 'mongoose';

async function runDB() {
    await mongoose.connect('mongodb://localhost/graphql-node-example', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('>>> DB is connected!');
}

runDB().catch(e => console.log(e));