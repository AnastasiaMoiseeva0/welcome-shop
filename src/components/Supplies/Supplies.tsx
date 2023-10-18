import "./Supplies.css"
import ProductsCard from "../ProductsCard/ProductsCard";
import { ICard } from "../../types/ICard";

interface SuppliesProps {
    suppliesCards : ICard[],
    onAddProduct : (card: ICard) => void,
}

function Supplies({suppliesCards, onAddProduct} : SuppliesProps) {
    return(
        <section className="supplies">
            <h2 className="supplies__title">Top Products</h2>   
            <div className="supplies__cards">
                {suppliesCards.slice(0, 5).map((card: ICard) => <ProductsCard key={card.id} card={card} onAddProduct={onAddProduct}/>) }
            </div>
        </section>
    )
}

export default Supplies;