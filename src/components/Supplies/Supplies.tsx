import "./Supplies.css"
import ProductsCard from "../ProductsCard/ProductsCard";
import { IOrder } from "../../types/IOrder";

interface SuppliesProps {
    suppliesCards : string[],
    onAddProduct : (card: IOrder) => void,
}

function Supplies({suppliesCards, onAddProduct} : SuppliesProps) {
    return(
        <section className="supplies">
            <h2 className="supplies__title">Top Products</h2>   
            <div className="supplies__cards">
                {suppliesCards.slice(0, 5).map((card: IOrder) => <ProductsCard key={card.id} id={card.id} onAddProduct={onAddProduct}/>) }
            </div>
        </section>
    )
}

export default Supplies;