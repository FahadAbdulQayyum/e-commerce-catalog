import '../style.css';
const ProductCard = ({ product }) => {
    return (<div className="border p-4 rounded-lg dark:border-gray-500">
      <img src={product.image} alt={product.title} className="w-full h-60 object-cover"/>
      <h3 className="font-semibold mt-2 ">{product.title}</h3>
      <p className="text-gray-500">{`$${product.price}`}</p>
      <p>{`Rating: ${product.rating.rate} ⭐`}</p>
    </div>);
};
export default ProductCard;
