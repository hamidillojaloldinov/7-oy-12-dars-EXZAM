import { Footer } from "@/components/footer/page";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center text-center p-20">
        <div>
          <img className="flex justify-center m-auto" src="/404.png" alt="" />
          <h1 className="text-black text-6xl">Oops! Page not found</h1>
          <p className="py-5">
            The page you are looking for might have been removed or <br />
            temporarily unavailable.
          </p>
          <button className="rounded-lg bg-pink-900	text-white p-2">
            <Link href="/Home">Back to HomePage</Link>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
