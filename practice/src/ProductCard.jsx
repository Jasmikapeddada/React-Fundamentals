import './ProductCard.css'

function ProductCard(Product) {

    const productStyle = {
        fontWeight: 'bold',
        border: '2px solid gray',
        padding: '10px',
        margin: '10px',
        width: '300px',
        height: '150px',
        textAlign: 'center',
        borderRadius: '5%'
    }

    const name = {
        color: 'black',
        fontSize: '20px',
        fontweight: 'bold'
    }

    return (
        <div style={productStyle}>
            <p style={name}>productName: {Product.product}</p>
            <p className="price">price: {Product.price}</p>
            <p>{Product.isAvailable === true ? <p className="isAvailable">In stock</p> : <p className="isNotAvailable">Out of stock</p>}</p>
        </div>
    )
}
export default ProductCard;