import { Footer } from "@/components/footer/page";
import { Navbar } from "@/components/navbar";
import { ChevronRight, ChevronUp, SlidersVertical } from "lucide-react";
import Link from "next/link";

async function women() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Women() {
  const products = await women();
  const randomProducts2 = products.sort(() => Math.random() - 0.5).slice(0, 8);
  // function electronicss() {onClick={()=>electronicss}}
  // function jewelerys() {onClick={()=>jewelerys}}
  // function mens() {onClick={()=>mens}}
  // function womens() {onClick={()=>womens}}
  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <div className="border-r-2 p-4">
            <div className="flex gap-24 border-b-2">
              <h1 className="text-2xl">Filter</h1>
              <SlidersVertical />
            </div>
            <div className="block">
              <button className="flex gap-20">
                <p>electronics</p>
                <ChevronRight />
              </button>
              <br />
              <button className="flex gap-24">
                <p>jewelery</p>
                <ChevronRight />
              </button>
              <br />
              <button className="flex gap-14">
                <p>men's clothing</p>
                <ChevronRight />
              </button>
              <br />
              <button className="flex gap-10 ">
                <p>women's clothing</p>
                <ChevronRight />
              </button>
            </div>
            <div className="border-b-2 border-t-2 py-2">
              <div className="flex gap-32 pt-4">
                <h1>Price</h1> <ChevronUp />
                <br />
              </div>
              <div className="pt-4">
                <img src="/One.png" alt="" />
                <div className="gap-5">
                  <button className="rounded-lg border-2 p-2">$70</button>
                  <button className="rounded-lg border-2 p-2">$600</button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-32 pt-4 pb-4">
                <h1>Colors</h1> <ChevronUp />
                <br />
              </div>
                <img src="/Frame 90.png" alt="" />
            </div>
          </div>
          <div className="justify-center px-20 gap-10 py-10">
            <div className="flex gap-5">
              {products.slice(0, 4).map((product) => (
                <Link href={`/women/${product.id}`}>
                  <div className="">
                    <img className="w-56 h-56" src={product.image} alt="" />
                    <p className="w-56">{product.title}</p>
                  </div>
                </Link>
              ))}{" "}
            </div>
            <br />
            <div className="flex gam-5">
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
        </div>
        <div className="flex justify-center py-10">
          <div>
            <h1 className="text-4xl">Clothing for Women Online in India</h1>
            <br />
            <p className="text-lg">
              Reexplore Women's Clothing Collection Online at Euphoria
            </p>
            <br />
            <p>
              Women's Clothing – Are you searching for the best website to buy
              Clothing for Women online in India? Well, your search for the
              coolest
              <br />
              and most stylish womens clothing ends here. From trendy Casual
              Womens Wear Online shopping to premium quality cotton women's
              <br />
              apparel, Euphoria has closet of Women Collection covered with the
              latest and best designs of Women's Clothing Online.
              <br />
              <br /> Our collection of clothes for women will make you the
              trendsetter with an iconic resemblance of choice in Womens Wear.
            </p>
            <br />
            <p className="text-lg">
              One-Stop Destination to Shop Every Clothing for Women: Euphoria
            </p>
            <p>
              <br />
              Today, Clothing for Women is gaining more popularity above all.
              This is because gone are the days when women were used to carrying
              <br />
              uncomfortable fashion. Today, a lady looks prettier when she is in
              Casual Womens Wear which is a comfortable outfit. Concerning this,
              <br />
              Euphoria has a big fat range of Stylish Women's Clothing that
              would make her the winner wherever she goes.
              <br />
              <br />
              Our collection of clothes for women will make you the trendsetter
              with an iconic resemblance of choice in Womens Wear. It is quite{" "}
              <br />
              evident to say that there are very few Womens Clothing online
              stores where you can buy Western Wear for Women comprising the{" "}
              <br />
              premium material and elegant design that you are always seeking
              for. Basically,
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-xl">
            <div className="text-2xl flex border-b">
              <h1 className="pr-96 border-r">Women's Clothing</h1>
              <h1 className="px-10">Best Price</h1>
            </div>
            <div className="flex">
              <div className="border-r pr-20">
                <p>Pick Any 4- Womens Plain T-shirt Combo</p>
                <p>Pick Any 4- Plain Womens Boxer Combo</p>
                <p>Pick Any 4 - Women Plain Full Sleeve T-shirt Combo</p>
                <p>Multicolor Checkered Long Casual Shirts for Women</p>
                <p>Pick Any 2: Plain Boxy Casual Shirts for Women Combo</p>
                <p>Blue Floral Anarkali Kurti</p>
                <p>Jade Black Narrow Cut Flexible Women Jeggings</p>
                <p>Mustard-yellow Solid Straight-Fit Women Pant</p>
                <p>Women Pants Combo - Pick Any 2</p>
                <p>Pista Green Solid Boxy Casual Shirts for Women</p>
                <p>Plain Burgundy Womens Boxer</p>
                <p>Striped Front Tie Casual Shirts for Women</p>
              </div>
              <div className="px-10">
                <p>₹1099</p>
                <p>₹1099</p>
                <p>₹1399</p>
                <p>₹499</p>
                <p>₹799</p>
                <p>₹599</p>
                <p>₹998</p>
                <p>₹499</p>
                <p>₹800</p>
                <p>₹449</p>
                <p>₹349</p>
                <p>₹449</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
