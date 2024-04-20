import { Footer } from "@/components/footer/page";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

async function getData(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function getData2() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Details({ params }) {
  const data = await getData(params.id);

  const products = await getData2();
  const randomProducts = products.sort(() => Math.random() - 0.5).slice(0, 8);
  return (
    <>
      <Navbar />
      <div key={data.id} className="m-auto flex justify-center xl:w-3/4 p-4">
        <div className="flex p-4 gap-5">
          <img
            className="w-2/4"
            src={data.image}
            width={500}
            height={300}
            alt={data.title}
          />
          <div>
            <h2 className="text-3xl font-semibold mt-2">{data.title}</h2>
            <p className="text-gray-600 text-md py-5">{data.description}</p>
            <p className="text-black border-black font-bold mt-2 text-xl border-2 p-2 w-24 rounded-lg cursor-pointer">
              ${data.price}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center px-20 gap-10 py-10">
          {products.slice(0, 4).map((product) => (
            <Link href={`/women/${product.id}`}>
              <div className="">
                <img className="w-56 h-56" src={product.image} alt="" />
                <p className="w-56">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center px-20 gap-10 py-10">
          {products.slice(4, 8).map((product) => (
            <Link href={`/women/${product.id}`}>
              <div className="">
                <img className="w-56 h-56" src={product.image} alt="" />
                <p className="w-56">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
