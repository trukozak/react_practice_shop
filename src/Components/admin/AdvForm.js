import React, { useState } from "react";
import { AdvFormStyled } from "./AdvFormStyled";
import { createNewAdv } from "../../services/Api";

const categories = ["phones", "laptops"];
const initialState = {
  name: "",
  image: "",
  description: "",
  price: 0,
  isSale: false,
  category: categories[0],
};

const AdvForm = () => {
  const [state, setState] = useState(initialState);

  const onHandleChange = (event) => {
    const { name, value, checked, type } = event.target;
    if (type === "checkbox") {
      setState((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    await createNewAdv(state);
    setState({ ...initialState });
  };

  return (
    <AdvFormStyled onSubmit={onHandleSubmit} className="formAdv">
      <label>
        Наименование:
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Изображение:
        <input
          type="text"
          name="image"
          value={state.image}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Описание:
        <input
          type="text"
          name="description"
          value={state.description}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Цена:
        <input
          type="text"
          name="price"
          value={state.price}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Распродажа:
        <input
          type="checkbox"
          name="isSale"
          checked={state.isSale}
          onChange={onHandleChange}
        />
      </label>

      <label>
        Категория:
        <select
          name="category"
          value={state.category}
          onChange={onHandleChange}
        >
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add adv</button>
    </AdvFormStyled>
  );
};

export default AdvForm;
