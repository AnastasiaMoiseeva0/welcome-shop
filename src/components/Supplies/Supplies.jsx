import "./Supplies.css"
import ProductsCard from "../ProductsCard/ProductsCard";
import suppliesCards from "../../utils/suppliesCards.json";

function Supplies() {
    return(
        <section className="supplies">
        <h2 className="supplies__title">Top Products</h2>   
        <div className="supplies__cards">
            {suppliesCards.slice(0, 5).map((id) => <ProductsCard key={id} url={id.url} description={id.description} price={id.price} caption={id.caption}/>) }
        </div>
    </section>
    )
}

export default Supplies;