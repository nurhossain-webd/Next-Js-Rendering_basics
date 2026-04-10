import FoodCard from '@/components/FoodCard';
import React from 'react';

const FoodsPage = async () => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const data = await res.json();
    const foods = data.data;
    console.log("foods:", foods);
    return (
        <div className='grid grid-cols-3 gap-4'>
            {foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)}
        </div>
    );
};

export default FoodsPage;