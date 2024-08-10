import React from 'react';
import render from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProducTitle', () => { 

    test('Debe de mostrar el componente correctamente con el título personalizado', () => {

        const wrapper = render.create(
            <ProductTitle title="Custom Product" className="custom-class" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

    test('Debe de mostrar el componente con el nombre del producto', () => { 

        const wrapper = render.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

 })