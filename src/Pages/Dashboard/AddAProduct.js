import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';

const AddAProduct = () => {
    const navigate = useNavigate();

    const addItem = event => {
        event.preventDefault();

        const name = event.target.productName.value;
        const category = event.target.category.value;
        const supplierName = event.target.sellerName.value;
        const img = event.target.imageLink.value;
        const description = event.target.description.value;
        const price = event.target.unitPrice.value;
        const stock = event.target.quantity.value;

        const item = { name, category, supplierName, img, description, price, stock };

        // send data to server
        fetch('https://tools-manufacturer-server.herokuapp.com/add-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                toast(
                    <div className='flex'>
                        <img className='w-20' src={img} alt="" />
                        <p className='ml-4'>{name} added to inventory.</p>
                    </div>
                );
            });

    }

    return (
        <div className="card items-center justify-center">
            <h2 className='my-8 text-2xl text-gray-600'>Add Item To Inventory</h2>
            <form onSubmit={addItem}>
                <div className="form-group mb-6 max-w-xl">
                    <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none" id="exampleInput125"
                        placeholder="Product Name" name='productName' />
                </div>
                <div className="form-group mb-6 max-w-xl">
                    <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none" id="exampleInput129"
                        placeholder="Category" name='category' />
                </div>
                <div className="form-group mb-6 max-w-xl">
                    <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none" id="exampleInput126"
                        placeholder="Image Link" name='imageLink' />
                </div>
                <div className="form-group mb-6 max-w-xl">
                    <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none" id="exampleInput126"
                        placeholder="Seller Name" name='sellerName' />
                </div>
                <div className="form-group mb-6 max-w-xl">
                    <textarea type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none" id="exampleInput126"
                        placeholder="Description" name='description' />
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="form-group mb-6 max-w-xl">
                        <input type="number" className="form-control block max-w-xs px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none" id="exampleInput124" aria-describedby="emailHelp124" placeholder="Unit Price" name='unitPrice' />
                    </div>
                    <div className="form-group mb-6 max-w-xl">
                        <input type="number" className="form-control block  max-w-xs px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none" id="exampleInput124" aria-describedby="emailHelp124" placeholder="Quantity" name='quantity' />
                    </div>
                </div><div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="form-group mb-6 max-w-xl">
                        <input type="number" className="form-control block  max-w-xs px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none" id="exampleInput124" aria-describedby="emailHelp124" placeholder="Min Order" name='minOrder' />
                    </div>
                    <div className="form-group mb-6 max-w-xl">
                        <input type="number" className="form-control block  max-w-xs px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none" id="exampleInput124" aria-describedby="emailHelp124" placeholder="Max Order" name='maxOrder' />
                    </div>
                </div>
                <button type="submit" className="
      max-w-xl
      px-6
      py-2.5
      bg-indigo-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-indigo-700 hover:shadow-lg
      focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-indigo-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Add New Item</button>
            </form>
        </div>
    );
};

export default AddAProduct;