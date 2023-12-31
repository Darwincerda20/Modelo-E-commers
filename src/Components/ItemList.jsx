import Item from './Item'

export const ItemList = ({data=[]}) => {
    return (
        data.map(productos => <Item key={productos.id} info={productos} />)
    );
};

export default ItemList;