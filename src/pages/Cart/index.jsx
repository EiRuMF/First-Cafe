import Description from "./description";
import HCart from "./header";
import Items from "./item";
import Method from "./method";

function Cart(params) {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="pb-5 px-5">
        <HCart />
      </section>
      {/* Item */}
      <section>
        <Items />
      </section>
      {/* Description */}
      <section className="p-5">
        <Description />
      </section>
      {/* Method */}
      <section>
        <Method />
      </section>
    </div>
  );
}

export default Cart;
