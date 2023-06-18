import Header from "./Header";
import Link from "./Link";
import { suppliesCards } from "../utils/cards";
import ProductsCard from "./ProductsCard";

function ProductsPage() {
  return (
    <div>
      <Header />
      <div>
        <Link />
      </div>
      <div>
      {suppliesCards.map((id) => <ProductsCard key={id} url={id.url} description={id.description} price={id.price} caption={id.caption}/>) }
      </div>
    </div>
  )
 }
 
export default ProductsPage;