import Hero from "../components/Hero";
import Newest from "../components/Newest";
import { getData } from "@/lib/utils";
import { Products } from "@/types/product";

export default async function Home() {
  const featuredProducts = await getData<Products>('/featuredProducts')
  const newestProducts = await getData<Products>('/newestProducts')
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero featuredProducts={featuredProducts} />
      <Newest newestProducts={newestProducts} />
    </div>
  );
}
