

export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {params.productId}</p>
    </div>
  );
}
