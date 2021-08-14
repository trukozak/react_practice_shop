import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/products/productsAction";
import { productsFilterSelector } from "../../redux/products/productsSelectors";

const Filter = () => {
  const filter = useSelector(productsFilterSelector);
  const dispatch = useDispatch();

  return (
    <label>
      filter
      <input
        name=""
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
