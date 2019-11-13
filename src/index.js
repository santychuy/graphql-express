import '@babel/polyfill';
if (process.env.NODE_ENV === 'development') { require('dotenv').config() };
import app from "./app";
import './db/database';

async function main() {
    app.listen(app.get('port'));
    console.log('Server on port:',app.get('port'));
};

main().catch(e => console.log(e));