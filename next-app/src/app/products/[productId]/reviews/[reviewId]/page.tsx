import { notFound } from "next/navigation";

export default async function ProuctReview({
   params,
}: {
    params:Promise<{ productId: string; reviewId: string }>;    
  })       
{
    const { productId, reviewId } = await params;
  // You can use productId and reviewId here
  if (parseInt(reviewId) > 1000){
       notFound();
  }
  return (
    <div>
      <h1>Product Reviews</h1>
      <p> reviews {reviewId} for product {productId}</p>
    </div>
  );
}