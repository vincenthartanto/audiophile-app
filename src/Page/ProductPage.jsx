import React, { useState } from "react";
import Button from "../Components/Button";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { getDataById, getDataBySlug } from "../Store/StoreData";
import Inthebox from "../Components/Inthebox";
import ProductRecommendation from "../Components/ProductRecommendation";
import { ScrollRestoration } from "react-router-dom";
import Gallery from "../Components/ProductPage/Gallery";
import AddPlusButton from "../Components/AddPlusButton";
import { useDispatch } from "react-redux";
import { cartAction } from "../Store/CartSlice";
import GoBackButton from "../Components/GoBackButton";
import Card from "../Components/Card";
import useImage from "../Hooks/useImage";
export default function ProductPage() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const data = getDataById(id);
  const navigate = useNavigate();
  const image = useImage(
    data.image.mobile,
    data.image.tablet,
    data.image.desktop
  );
  const firstGalleryImage = useImage(
    data.gallery.first.mobile,
    data.gallery.first.tablet,
    data.gallery.first.desktop
  );
  const secondGalleryImage = useImage(
    data.gallery.second.mobile,
    data.gallery.second.tablet,
    data.gallery.second.desktop
  );
  const thirdGalleryImage = useImage(
    data.gallery.third.mobile,
    data.gallery.third.tablet,
    data.gallery.third.desktop
  );
  function addItemToCartHandler() {
    const { id, name, price, image } = data;

    dispatch(cartAction.addCart({ id, name, price, quantity, image }));
  }

  function increaseItem() {
    setQuantity((quantity) => quantity + 1);
  }
  function decreaseItem() {
    setQuantity((quantity) => quantity - 1);
  }
  return (
    <Card>
      <GoBackButton></GoBackButton>
      <div className="md:flex md:space-x-12 space-y-8">
        <div>
          <img className="rounded-xl" src={`${image}`}></img>
        </div>
        <div className="  space-y-4 md:flex md:flex-col md:justify-between">
          {" "}
          {data.new && (
            <h1 className="tracking-widestTitle font-light text-orangeColor text-sm">
              NEW PRODUCT
            </h1>
          )}
          <h2 className="text-3xl break-words w-52">
            {data.name.toUpperCase()}
          </h2>
          <p className="opacity-50 text-justify">{data.description}</p>
          <div className="text-2xl tracking-widest">${data.price}</div>
          <div className="flex space-x-4">
            <AddPlusButton
              increase={increaseItem}
              decrease={decreaseItem}
              quantity={quantity}
            ></AddPlusButton>
            <Button
              onClick={addItemToCartHandler}
              color="text-white bg-orangeColor"
              title="ADD TO CART"
            ></Button>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <h1 className="text-3xl font-light">FEATURES</h1>
        <p className="text-justify opacity-50">{data.features}</p>
      </div>
      <div className="space-y-4">
        <div className="md:flex md:justify-evenly md:p-24">
          <h1 className="text-3xl font-light tracking-wider">IN THE BOX</h1>
          <div className="space-y-4">
            {data.includes.map((data) => {
              return (
                <Inthebox
                  key={data.item}
                  quantity={data.quantity}
                  name={data.item}
                ></Inthebox>
              );
            })}
          </div>
        </div>
        <Gallery
          firstImage={`${firstGalleryImage}`}
          secondImage={`${secondGalleryImage}`}
          thirdImage={`${thirdGalleryImage}`}
        ></Gallery>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-2xl">YOU MAY ALSO LIKE</h1>
        <div className="space-y-4 md:flex md:space-x-2  md:space-y-0">
          {data.others.map((data) => {
            return (
              <ProductRecommendation
                key={data.slug}
                src={data.image}
                name={data.name}
                buttonCategory={data.category}
                onClick={() => {
                  const slug = getDataBySlug(data.slug);
                  navigate(`/category/${slug.category}/${slug.id}`);
                }}
              ></ProductRecommendation>
            );
          })}
        </div>
      </div>
      <ScrollRestoration />
    </Card>
  );
}
