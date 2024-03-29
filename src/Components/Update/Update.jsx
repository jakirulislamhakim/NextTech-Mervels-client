import { data } from "autoprefixer";
import { useRef } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const product = useLoaderData();
  console.log(product);
  const { name, image, price, rating, productType, brand, description,_id } =
    product;

  const nameRef = useRef();
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const productType = form.productType.value;
    const brand = form.brand.value;
    const description = form.description.value;

    const productDetails = {
      name,
      image,
      price,
      rating,
      productType,
      brand,
      description,
    };
    console.log(productDetails);
    // console.log(productDetails);

    fetch(`https://nex-tech-marvels-server-ae3iinbfs-jakirulislamhakim.vercel.app/product/${_id}`,{
      method:'put',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(productDetails)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount){
        Swal.fire({
          icon: 'success',
          title: 'Update',
          text: 'Product successfully update',
        })
      }
    })

  };

  return (
    <div>
      <form onSubmit={handleUpdateProduct} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            ref={nameRef}
            defaultValue={name}
            type="text"
            name="name"
            placeholder="Product Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image </span>
          </label>
          <input
            type="text"
            defaultValue={image}
            name="image"
            placeholder="Product Image URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price </span>
          </label>
          <input
            type="text"
            defaultValue={price}
            name="price"
            placeholder="Product Price"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating </span>
          </label>
          <input
            type="number"
            defaultValue={rating}
            name="rating"
            placeholder="Product Rating"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Type</span>
          </label>
          <select
            name="productType"
            defaultValue={productType}
            className="select select-bordered w-full "
            required
          >
            {/* <option disabled selected>Select your product type .</option> */}
            <option value={"phone"}>Phone</option>
            <option>Computer</option>
            <option>Headphone</option>
            <option>Watch</option>
            <option>Laptop</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand </span>
          </label>
          <select
            name="brand"
            defaultValue={brand}
            className="select select-bordered w-full "
            required
          >
            {/* <option disabled selected>Select your brand .</option> */}
            <option value={"google"}>Google</option>
            <option value={"apple"}>Apple</option>
            <option value={"samsung"}>Samsung</option>
            <option value={"walton"}>Walton</option>
            <option value={"oppo"}>Oppo</option>
            <option value={"mi"}>Mi</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product details </span>
          </label>
          <textarea
            name="description"
            defaultValue={description}
            placeholder="Write short description"
            className="textarea textarea-bordered textarea-lg w-full"
            required
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Update product</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
