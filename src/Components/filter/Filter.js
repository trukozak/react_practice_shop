import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/products/productsAction";
import { productsFilterSelector } from "../../redux/products/productsSelectors";
const Filter = ({filter,setFilter}) => {
  return (
    <label>
      filter
      <input
        name=""
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  );
};


const mapStateToProps = (state) => ({
  filter: productsFilterSelector(state)
});

export default connect(mapStateToProps, {setFilter})(Filter);
