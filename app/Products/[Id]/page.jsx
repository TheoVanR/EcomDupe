export default function Product({ params }) {
    const product = params.product;
    console.log('Product:', product); // Debugging line
    return <div>Data: {product.title}</div>;
}