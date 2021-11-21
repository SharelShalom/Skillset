const RenderLabel = ( label ) => {
    return (  
        <label id= {label.id} key={label.id}>
            {label.text}
        </label>
    );
}
 
export default RenderLabel;