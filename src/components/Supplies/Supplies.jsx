import "./Supplies.css"
import ProductsCard from "../ProductsCard/ProductsCard";
import suppliesCards from "../../utils/suppliesCards.json";

function Supplies() {
    return(
        <section className="supplies">
        <h2 className="supplies__title">Top Products</h2>   
        <div className="supplies__cards">
            {suppliesCards.slice(0, 5).map((card) => <ProductsCard key={card.id} card={card}/>) }
        </div>
    </section>
    )
}

export default Supplies;