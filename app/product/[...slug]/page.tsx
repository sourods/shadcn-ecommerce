
import ImageGallery from "../components/ImageGallery";
import { getData } from "@/lib/utils";
import Offer from "../components/Offer";
import { Products } from "@/types/product";

interface Props {
  params: {
    slug: string
    id: string
  }
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug: [name, id] } = params
  const [product] = await getData<Products>(`/products?slug=${name}&_id${id}`)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={product.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {product.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {product.name}
              </h2>
            </div>
            <Offer product={product} />
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
