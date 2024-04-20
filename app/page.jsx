import * as React from "react";
import { Navbar } from "@/components/navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { Footer } from "@/components/footer/page";
import "./globals.css";
import Link from "next/link";

async function men() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function women() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const products = await men();
  const randomProducts = products.sort(() => Math.random() - 0.5).slice(0, 8);
  const products2 = await women();
  const randomProducts2 = products2.sort(() => Math.random() - 0.5).slice(0, 8);
  return (
    <>
      <Navbar />
      <main>
        <Carousel className="p-0 border-none flex items-center justify-center">
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card>
                    <CardContent className="text-white text-left	rasm1 w-full max-h-screen flex justify-center p-2">
                      <div className="pt-36 pb-36 pr-96 gap-y-8">
                        <h1 className="text-2xl pt-4">T-shirt / Tops</h1>
                        <h1 className="text-7xl pt-4 ">
                          Summer <br />
                          Value Pack
                        </h1>
                        <h1 className="text-4xl pt-4">
                          cool / colorful / comfy
                        </h1>
                        <button className="text-xl mt-4 bg-white text-black p-4 rounded-lg">
                          Shop Now
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex gap-5 justify-center	p-5">
          <div className="text-white rasm2">
            <h1 className="text-lg">Low Price</h1>
            <h1 className="text-4xl">High Coziness</h1>
            <h1 className="text-lg">UPTO 50% OFF</h1>
            <h1 className="text-2xl">Explore Items</h1>
          </div>
          <div className="text-white rasm3">
            <h1 className="text-lg">Beyoung Presents</h1>
            <h1 className="text-4xl">
              Breezy Summer <br />
              Style
            </h1>
            <h1 className="text-lg">UPTO 50% OFF</h1>
            <h1 className="text-2xl">Explore Items</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h1 className="text-4xl">New Arrival</h1>
            <div className="flex justify-center gap-5 pt-5">
              <div className="">
                <img src="/rasm4.png" alt="" />
                <h1 className="pt-8">Knitted Joggers</h1>
              </div>
              <div className="">
                <img src="/Rectangle 28.png" alt="" />
                <h1 className="pt-8">Full Sleeve</h1>
              </div>
              <div className="">
                <img src="/Rectangle 28-1.png" alt="" />
                <h1 className="pt-8">Active T-Shirts</h1>
              </div>
              <div className="">
                <img src="/Rectangle 28-2.png" alt="" />
                <h1 className="pt-8">Urban Shirts</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h1 className="text-4xl py-8">Big Saving Zone</h1>
            <div className="">
              <div className="flex gap-2">
                <div className="r74 w-full">
                  <h1 className="text-5xl">
                    Hawaiian <br />
                    Shirts
                  </h1>
                  <p className="py-4">Dress up in summer vibe</p>
                  <h3 className="text-2xl">UPTO 50% OFF</h3>
                  <ArrowDown />
                  <button className="border-2 border-black rounded-md p-2 text-sm mt-6">
                    SHOP NOW
                  </button>
                </div>
                <div className="r75 w-full">
                  <button>Limited Stock</button>
                  <h1 className="text-5xl">
                    Printed <br />
                    T-Shirt
                  </h1>
                  <p className="py-4">New Designs Every Week</p>
                  <h3 className="text-2xl">UPTO 40% OFF</h3>
                  <ArrowDown />
                  <button className="border-2 border-black rounded-md p-2 text-sm mt-6">
                    SHOP NOW
                  </button>
                </div>
                <div className="r76 w-full">
                  <h1 className="text-5xl">
                    Cargo <br />
                    Joggers
                  </h1>
                  <p className="py-4">Move with style & comfort</p>
                  <h3 className="text-2xl">UPTO 50% OFF</h3>
                  <ArrowDown />
                  <button className="border-2 border-black rounded-md p-2 text-sm mt-6">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <div className="r77 w-full">
                  <h1 className="text-5xl">
                    Urban <br />
                    Shirts
                  </h1>
                  <p className="py-4">Live In Confort</p>
                  <h3 className="text-2xl">FLAT 60% OFF</h3>
                  <ArrowDown />
                  <button className="border-2 border-black rounded-md p-2 text-sm mt-6">
                    SHOP NOW
                  </button>
                </div>
                <div className="r78 w-full">
                  <h1 className="text-5xl">
                    Oversized <br />
                    T-Shirts
                  </h1>
                  <p className="py-4">Street Style Icon</p>
                  <h3 className="text-2xl">FLAT 60% OFF</h3>
                  <ArrowDown />
                  <button className="border-2 border-black rounded-md p-2 text-sm mt-6">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 p-10">
          <div className="unsplash p-auto content-center px-20 text-white">
            <h1 className="text-4xl">
              WE MADE YOUR EVERYDAY <br /> FASHION BETTER!
            </h1>
            <p className="py-10">
              In our journey to improve everyday fashion, <br />
              euphoria presents EVERYDAY wear range - <br />
              Comfortable & Affordable fashion 24/7
            </p>
            <button className="px-8 py-4 bg-white text-black rounded-lg">
              Shop Now
            </button>
          </div>
          <img src="/Rectangle 13.png" alt="" />
        </div>
        <div className="flex justify-center px-20 gap-10">
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
          {products2.slice(0, 4).map((product) => (
            <Link href={`/women/${product.id}`}>
              <div className="">
                <img className="w-56 h-56" src={product.image} alt="" />
                <p className="w-56">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center text-white">
          <div className="inline-block text-center bg-gray-900 p-10 rounded-lg">
            <h1 className="text-7xl">Top Brands Deal</h1>
            <p className="py-4">Up To 60% off on brands</p>
            <img src="/Group 48.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center px-20 gap-10 py-10">
          {products2.slice(0, 4).map((product) => (
            <Link href={`/women/${product.id}`}>
              <div className="">
                <img className="w-56 h-56" src={product.image} alt="" />
                <p className="w-56">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
