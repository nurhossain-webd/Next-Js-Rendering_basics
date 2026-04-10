import Image from "next/image";
import Link from "next/link";


const FoodCard = ({ food }) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <Image src={food.image_link}
                        alt={food.dish_name}
                        width={200}
                        height={200}>
                    </Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {food.dish_name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Category: {food.category}</p>
                    <p><small>Price: ${food.price.toFixed(2)}</small></p>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <Link href={`/foods/${food.id}`} className="btn btn-primary">View Details</Link>
                        <button className="btn ">Add to Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;