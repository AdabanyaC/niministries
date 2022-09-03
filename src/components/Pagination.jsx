import React from "react";

const Pagination = ({
  pageNumber,
  handlePage1,
  handlePage2,
  handlePage3,
  handlePage4,
  handlePage5,
  handlePage6,
  handlePage7,
}) => {
  return (
    <div className="flex justify-center gap-8 bg-gray-300 px-8 py-4 rounded-full w-fit m-auto">
      <button>Prev</button>
      <p
        className={`cursor-pointer ${
          pageNumber === 1 && `bg-white px-4 rounded-full `
        }`}
        onClick={handlePage1}
      >
        1
      </p>
      <p
        className={`cursor-pointer ${
          pageNumber === 2 && `bg-white px-4 rounded-full `
        }`}
        onClick={handlePage2}
      >
        2
      </p>
      <p
        className={`cursor-pointer ${
          pageNumber === 3 && `bg-white px-4 rounded-full `
        }`}
        onClick={handlePage3}
      >
        3
      </p>
      <p
        className={`cursor-pointer ${
          pageNumber === 4 && `bg-white px-4 rounded-full `
        }`}
        onClick={handlePage4}
      >
        4
      </p>
      <p
        className={`cursor-pointer ${
          pageNumber === 5 && `bg-white px-4 rounded-full `
        }`}
        onClick={handlePage5}
      >
        5
      </p>
      <p
        className={`cursor-pointer ${
          pageNumber === 6 && `bg-white px-4 rounded-full `
        }`}
        onClick={handlePage6}
      >
        6
      </p>
      <p
        className={`cursor-pointer ${
          pageNumber === 7 && `bg-white px-4 rounded-full `
        }`}
        onClick={handlePage7}
      >
        7
      </p>
      <button>Next</button>
    </div>
  );
};

export default Pagination;
