const Product = (props) => {
    return (
        <div className="product-card col-12 col-md-4">
            <img className="product-img img-fluid" src={`/media/${props.img}`} alt={`product samples ${props.type}`} />
            <h5 className="card-title text-center">{props.name}</h5>
        </div>
    )
};

export default Product;