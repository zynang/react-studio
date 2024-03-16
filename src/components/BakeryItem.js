// TODO: create a component that displays a single bakery item

// The BakeryItem component should accept item and addToCart as props and display the item's details along with a button to add the item to the cart.
export default function BakeryItem(props) {
    return (
        <div className="card"> 
            <img className="image" src= {props.image} width={250} height={250} />
            <h3>{props.name}</h3>
            <h4 className="desc">{props.description}</h4>
            <p>{props.price}</p>
            <button className="button" value="Add to cart" onClick={() => props.addToCart(props.item)}>add to cart</button>
        </div>
    );
        
}
