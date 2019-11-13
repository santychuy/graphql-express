import express from 'express';
import morgan from 'morgan';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';

//Inits
const app = express();

//Imp Routes
import IndexRoutes from './routes/index.routes';

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
if (process.env.NODE_ENV === 'development') { app.use(morgan('dev')); }
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(IndexRoutes);
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    context: {
        secret: '15na'
    }
}));

//Static Files

export default app;