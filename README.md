# MTC-Product-Card

Este es un paquete de pruebas de despliegle en NPM

### Martí Touriño

## Ejemplo
```
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from 'mtc-product-card';
```

```
<ProductCard 
    product={ product }
    initialValues={{
        count: 4,
        //maxCount: 10
    }}
>
    {
    ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )
    }
</ProductCard>
```