import React from 'react';

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    console.log("food:", food);
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body space-y-4">
                    <div>
                        <h2 className="card-title text-3xl">{food?.dish_name}</h2>
                        <div className="mt-2 badge badge-secondary">{food?.category}</div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">ID</h3>
                        <p>{food?.id}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Alternative Names</h3>
                        <div className="flex flex-wrap gap-2">
                            {food?.alternative_names?.map((name, index) => (
                                <span key={index} className="badge badge-outline">
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Main Ingredients</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {food?.main_ingredients?.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3">Approximate Nutrition Per Serving</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="bg-base-200 rounded-lg p-3">
                                <p className="font-medium">Calories</p>
                                <p>{food?.approximate_nutrition_per_serving?.calories}</p>
                            </div>
                            <div className="bg-base-200 rounded-lg p-3">
                                <p className="font-medium">Protein</p>
                                <p>{food?.approximate_nutrition_per_serving?.protein}</p>
                            </div>
                            <div className="bg-base-200 rounded-lg p-3">
                                <p className="font-medium">Carbohydrates</p>
                                <p>{food?.approximate_nutrition_per_serving?.carbohydrates}</p>
                            </div>
                            <div className="bg-base-200 rounded-lg p-3">
                                <p className="font-medium">Fat</p>
                                <p>{food?.approximate_nutrition_per_serving?.fat}</p>
                            </div>
                            <div className="bg-base-200 rounded-lg p-3 sm:col-span-2">
                                <p className="font-medium">Fiber</p>
                                <p>{food?.approximate_nutrition_per_serving?.fiber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailPage;