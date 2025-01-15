export default async function Page({ params }) {
    const product = (await params).product
    return <div>Data: {product}</div>
  }