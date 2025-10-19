import Link from "next/link";
export default function productCards({id, title, price ,image}) {
    return (
        <div key={id} className="border-1 rounded-lg p-5 flex flex-col gap-2">
            <h3 className="font-semibold">id: {id}</h3>
            <h3 className="font-semibold">title: {title}</h3>
            <p>price: ${price}</p>
            <img src={image} alt={title} className="w-full h-80 "/> 
            <Link 
            href={`/productCard/${id}?title=${title}&price=${price}&image=${image}`} 
            className="mt-2 p-2 text-white rounded-lg text-center underline">View Product</Link>
</div>
    );
}