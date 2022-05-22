import React from 'react';

const Product = () => {
    return (
        <a
            href="/product/simple-watch"
            class="block"
        >
            <div class="aspect-w-1 aspect-h-1">
                <img
                    loading="lazy"
                    alt="Simple Watch"
                    class="object-cover rounded"
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                />
            </div>

            <div class="mt-2">
                <h5 class="font-medium">
                    Simple Watch
                </h5>

                <p class="mt-1 text-sm text-gray-700">
                    $150
                </p>
            </div>
        </a>
    );
};

export default Product;