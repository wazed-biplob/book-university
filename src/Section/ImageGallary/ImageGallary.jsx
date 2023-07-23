import React from "react";

const ImageGallary = () => {
  return (
    <>
      <div>
        <h1
          style={{ fontSize: "32px" }}
          className="mt-16 text-center font-extrabold"
        >
          Image Gallary
        </h1>
      </div>
      <section className="py-2 dark:dark:bg-gray-800 dark:dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co/9ZSsFY0/g1.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/cJTTVgX/g3.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/gg7R0Hd/g4.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/kXPBtXq/g5.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/wMNdZDV/g2.jpg"
          />
        </div>
      </section>
    </>
  );
};

export default ImageGallary;
