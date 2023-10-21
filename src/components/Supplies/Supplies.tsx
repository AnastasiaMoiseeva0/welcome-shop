import "./Supplies.css"
import ProductsCard from "../ProductsCard/ProductsCard";
import { ICard } from "../../types/ICard";
import { useAppSelector } from "../../redux/hooks";

interface SuppliesProps {
    onAddProduct : (card: ICard) => void,
}

function Supplies({ onAddProduct} : SuppliesProps) {

  const products = useAppSelector(state => state.allProducts);

    return(
        <section className="supplies">
            <h2 className="supplies__title">Top Products</h2>   
            <div className="supplies__cards">
                {products.slice(0, 5).map((card: ICard) => <ProductsCard key={card.id} card={card} onAddProduct={onAddProduct}/>) }
            </div>
        </section>
    )
}

export default Supplies;