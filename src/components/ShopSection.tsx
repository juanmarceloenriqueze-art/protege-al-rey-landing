import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import camiseta from "@/assets/products/polo-ninos.jpg";
import tablero from "@/assets/products/tablero-venta.jpg";
import gorra from "@/assets/products/gorra-logo.jpg";


const products = [
  {
    id: 1,
    name: "Camiseta Oficial Protege al Rey",
    price: 15,
    description: "Camiseta de algodón premium con el escudo del club",
    image: camiseta,
  },
  {
    id: 2,
    name: "Tablero Pro",
    price: 22,
    description: "Tablero profesional de vinilo enrollable con piezas",
    image: tablero,
  },
  {
    id: 3,
    name: "Gorra del Club",
    price: 15,
    description: "Gorra bordada con el logo oficial del club",
    image: gorra,
  },
];

const ShopSection = () => {
  const handlePurchase = (productName: string, price: number) => {
    const message = `Hola, me interesa comprar: ${productName} - $${price}. ¿Está disponible?`;
    const whatsappUrl = `https://wa.me/593982375944?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="tienda" className="py-12 md:py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
            <span className="uppercase tracking-widest text-xs md:text-sm font-semibold">Tienda</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Souvenirs del <span className="text-gradient-gold">Club</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Lleva contigo el orgullo de pertenecer a Protege al Rey
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-epic overflow-hidden group"
            >
              {/* Product Image */}
              <div className="h-48 bg-navy-light flex items-center justify-center overflow-hidden">
  <img
    src={product.image}
    alt={product.name}
    className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
  />
</div>


              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <p className="text-3xl font-bold text-primary">
                  ${product.price}
                </p>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  variant="shop"
                  className="w-full"
                  onClick={() => handlePurchase(product.name, product.price)}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Comprar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
