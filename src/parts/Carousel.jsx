import Product from "./Product";

const Carousel = (props) => {
    return (
        <div>
            <div className="container">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="product col-12">
                                <Product img="blackmirror.JPG" name="black mirror pendant" />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="product col-12">
                                <Product img="smlpearl.JPG" name="black mirror pendant" />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="product col-12">
                                <Product img="blackmirror.JPG" name="black mirror pendant" />
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

    )
};

export default Carousel;