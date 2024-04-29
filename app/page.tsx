import Hero from "../components/Hero";
import Newest from "../components/Newest";
import { request } from "@/lib/utils";
import { Products } from "@/types/product";

const fetchFeaturedProducts = async () => await request(`http://localhost:3003/featuredProducts`)
const fetchNewestProducts = async () => await request(`http://localhost:3003/newestProducts`)

export default async function Home() {
  const featuredProducts: Products = await fetchFeaturedProducts()
  const newestProducts: Products = await fetchNewestProducts()
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero featuredProducts={featuredProducts} />
      <Newest newestProducts={newestProducts} />
    </div>
  );
}
