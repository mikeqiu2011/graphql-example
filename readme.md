# graphQL in node demo

## query body to localhost:3000/graphql
    {
        "query": "{description}"
    }

## query the graphiql endpoint
    {
        orders {
            subtotal
            items {
                product {
                    id
                    description
                    reviews {
                    rating
                }
            }
            quantity
            }
        } 
    }

## productByPrice
    productsByPrice(min: 10, max: 50){
        description
    }
