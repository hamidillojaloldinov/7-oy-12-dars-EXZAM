import { Footer } from "@/components/footer/page";
import { Navbar } from "@/components/navbar";

async function men() {
  const res = await fetch("https://fakestoreapi.com/products/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Shop() {
  const products = await men();
  const randomProducts = products.sort(() => Math.random() - 0.5).slice(0, 8);
  return (
    <>
      <Navbar />
      <main>
        <div className="flex justify-center px-20 gap-10 py-10">
          {products.slice(0, 4).map((product) => (
            <div className="">
              <img className="w-56 h-56" src={product.image} alt="" />
              <p className="w-56">{product.title}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center px-20 gap-10 py-10">
          {products.slice(4, 8).map((product) => (
            <div className="">
              <img className="w-56 h-56" src={product.image} alt="" />
              <p className="w-56">{product.title}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center px-20 gap-10 py-10">
          {products.slice(8, 12).map((product) => (
            <div className="">
              <img className="w-56 h-56" src={product.image} alt="" />
              <p className="w-56">{product.title}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
