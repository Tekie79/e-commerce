import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';


const products = [
    {id: 1, name: "Shoes", description: "Running Shoes", price: "$5", image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER.png?v=1601054861"},
    {id: 2, name: "Macbook", description: "Apple Macbook", price: "$10", image: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"}
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4} >
            {products.map((product) => {
               return ( <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                     <Product product={product} />
                </Grid>)
            })}
            </Grid>
        </main>
    )
}

export default Products;
