// http://localhost:5000/graphql

// https://github.com/graphql/express-graphql
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT} \nTest : http://localhost:5000/graphql`));