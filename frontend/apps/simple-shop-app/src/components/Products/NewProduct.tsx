import React, { FC, useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './NewProduct.css';

export type NewProductProps = {
    onAddProduct: (title: string, price: string) => void;
};

const NewProduct: FC<NewProductProps> = ({ onAddProduct }) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
    };

    const priceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredPrice(event.target.value);
    };

    const submitProductHandler = (event: React.FormEvent) => {
        event.preventDefault();
        onAddProduct(enteredTitle, enteredPrice);
    };

    return (
        <section id="new-product">
            <h2>Add a New Product</h2>
            <form onSubmit={submitProductHandler}>
                <Input type="text" label="Title" id="title" value={enteredTitle} onChange={titleChangeHandler} />
                <Input
                    type="number"
                    label="Price"
                    step={0.01}
                    id="price"
                    value={enteredPrice}
                    onChange={priceChangeHandler}
                />
                <Button type="submit">ADD PRODUCT</Button>
            </form>
        </section>
    );
};

export default NewProduct;
