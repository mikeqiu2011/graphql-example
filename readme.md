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

## productById
    product(id: 'redshoe'){
        description
    }

## mutation
    mutation {
        addNewProduct(id: "greenshirt", description: "green shirt", price: 60){
            id
            reviews {
                rating
            }
        }
    }

## add comment to two different products in one go
    mutation {
        addNewProduct(id: "greenshirt", description: "green shirt", price: 60){
            id
            reviews {
            rating
            }
        }
        shoeReview: addProductReview(productId: "redshoe", rating: 4, comment: "suitable for sport!"){
            id
            reviews{
            rating
            comment
            }
        }
        addProductReview(productId: "greenshirt", rating: 4, comment: "suitable for sport!"){
            id
            reviews{
            rating
            comment
            }
        }
    }

## Apollo
    https://studio.apollographql.com/sandbox/explorer
    

