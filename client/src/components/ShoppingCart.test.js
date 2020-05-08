import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

const plants = [{id:123, name:'rose', price: 21}, {id:234, name:'tulip', price: 32}] // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)

    const displayPlantName1 = getByText(/rose/i)
    const displayPlantPrice1 = getByText(/21/i)

    const displayPlantName2 = getByText(/tulip/i)
    const displayPlantPrice2 = getByText(/32/i)


    expect(displayPlantName1).toBeInTheDocument()
    expect(displayPlantPrice1).toBeInTheDocument()

    expect(displayPlantName2).toBeInTheDocument()
    expect(displayPlantPrice2).toBeInTheDocument()

})