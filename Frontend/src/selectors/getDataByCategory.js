export const getDataByCategory = ( products, values ) => {
    const { text, sliderValue, currentKey } = values;

    return products.filter(({ img, name, price }) => (
        ( img[0] === currentKey || currentKey === '0' ) && 
        ( price <= sliderValue ) && 
        ( name.includes(text) )
    ));
}