import React from 'react';
import render from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProducImage', () => { 

    test('Debe de mostrar el componente correctamente con la imagen personalizada', () => {

        const wrapper = render.create(
            <ProductImage img="https://hola.jpg" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })
    
    test('Debe de mostrar el componente con la imagen del producto', () => { 

        const wrapper = render.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage img="https://hola.jpg" />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

 })