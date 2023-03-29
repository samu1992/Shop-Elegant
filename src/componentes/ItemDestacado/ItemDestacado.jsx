import Items from "../Items/Items";
import { Link } from "react-router-dom";

function ItemDestacado({ productos }) {
    return (
        <main className="main">
            <h3 className="h3">Nueva Coleccion</h3>
            <section className="main_Item">
            {productos.map((producto) => (
                <Items key={producto.id} productos={producto}></Items>
            ))}
            </section>
            <section>
            <Link className="a" to="/productos"><h3 className="h3">Ver Todo</h3></Link>
            </section>
        </main>
    );
}
export default ItemDestacado