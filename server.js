const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`)

const root = {
    description: 'Red shoe',
    price: 42.2
}

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(3000, () => {
    console.log('running graphql server on port 3000');
})