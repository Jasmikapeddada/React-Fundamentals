function ProductCard(Product){
    
    return (
        <>
        <p>This is profile</p>
        <p>productName : {Product.product}</p>
        <p>price : {Product.price}</p>
        <p>{Product.isAvailable===true?"in stock":"Out of stock"}</p>
        </>
    )
}
export default ProductCard;