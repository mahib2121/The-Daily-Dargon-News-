import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json').then((res) => res.json());

const Categories = () => {
    const categories = use(categoriesPromise);

    return (
        <div className="p-4">
            <h2 className="font-bold text-lg mb-4">
                All Categories ({categories.length})
            </h2>

            <div className="grid grid-cols-1 gap-2">
                {categories.map((category) => (
                    <NavLink key={category.id} to={`/category/${category.id}`}
                        className={({ isActive }) =>
                            `btn w-full text-left ${isActive ? 'btn-primary text-white' : 'btn-ghost'
                            }`
                        }
                    >
                        {category.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;
