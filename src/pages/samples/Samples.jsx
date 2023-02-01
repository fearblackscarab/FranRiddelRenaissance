import Product from "../../parts/Product";

const Samples=()=>{

    return(
        <div className="samples">
            <h2 className="test">Samples</h2>
            <div className="container">
                <div className="row">
                    <Product img='broch.jpg' name='' type='bracelet'/>
                    <Product img='crest.jpg' name='' type='necklace'/>
                    <Product img='emerald-crest.jpg' name='' type='necklace'/>
                    <Product img='horse-necklace.jpg' name='' type='necklace'/>
                    <Product img='brochs.jpg' name='' type='bracelet'/>
                    <Product img='star-pendant.jpg' name='' type='necklace'/>
                </div>
            </div>
        </div>
    )
};

export default Samples;