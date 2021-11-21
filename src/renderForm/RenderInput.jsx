const RenderInput = ( input, onChange) => {
    return (
      <input 
      key={input.id}
      id={input.id}
      type="text"
      value={input.text}
      placeholder={input.attributes.placeholder}
      onChange={e => onChange(e.currentTarget.value, input)}
      />
    )

  };

  export default RenderInput;