const Product = (props) => {
    return (
        <div className="product-card">
            <img className="product-img img-fluid" src={`/media/${props.img}`} alt="product" />
            <h5 className="card-title text-center">{props.name}</h5>
        </div>
    )
};

export default Product;