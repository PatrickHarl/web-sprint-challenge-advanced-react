import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";





// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {


    const { getByText } = render(<CheckoutForm />);

    const header = getByText(/checkout form/i);

    /*this line doesn't work, everything above works*/
    expect(header).toBeInTheDocument()
    


});

test("form shows success message on submit with form details", async () => {


    const { getByLabelText, getByTestId, findByText } = render(<CheckoutForm />)

    const firstName = getByLabelText(/first name:/i)
    const lastName = getByLabelText(/last name:/i)
    const address = getByLabelText(/address:/i)
    const city = getByLabelText(/city:/i)
    const state = getByLabelText(/state:/i)
    const zip = getByLabelText(/zip:/i)

    fireEvent.change(firstName, {target: {value: 'Patrick'}})
    fireEvent.change(lastName, {target: {value: 'Harl'}})
    fireEvent.change(address, {target: {value: '8275 Sunny Creek Way'}})
    fireEvent.change(city, {target: {value: 'Sacramento'}})
    fireEvent.change(state, {target: {value: 'CA'}})
    fireEvent.change(zip, {target: {value: '95823'}})
    
    const submitBtn = getByTestId('submit-btn')

    fireEvent.click(submitBtn)

    const successMessage = await findByText(/you have ordered some plants!/i)
    expect(successMessage).toBeInTheDocument()

    const firstNameInDoc = await findByText(/patrick/i)
    const lastNameInDoc = await findByText(/harl/i)
    const addressInDoc = await findByText(/8275 sunny creek way/i)
    const cityInDoc = await findByText(/sacramento/i)
    const stateInDoc = await findByText(/ca/i)
    const zipInDoc = await findByText(/95823/i)

    expect(firstNameInDoc).toBeInTheDocument()
    expect(lastNameInDoc).toBeInTheDocument()
    expect(addressInDoc).toBeInTheDocument()
    expect(cityInDoc).toBeInTheDocument()
    expect(stateInDoc).toBeInTheDocument()
    expect(zipInDoc).toBeInTheDocument()






});
