import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

const categories = ["phones", "laptops"];
const initialState = {
  name: "",
  image: "",
  description: "",
  price: 0,
  isSale: false,
  category: categories[0],
};

class AdvForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addNewAdv({ ...this.state, id: uuidv4() });
    this.setState({...initialState});
  };

  render() {
    const { name, description, price, isSale, image, category } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          image:
          <input
            type="text"
            name="image"
            value={image}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          isSale:
          <input
            type="checkbox"
            name="isSale"
            checked={isSale}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Категория:
          <select
            name="category"
            value={category}
            onChange={this.onHandleChange}
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Adv</button>
      </form>
    );
  }
}

export default AdvForm;
