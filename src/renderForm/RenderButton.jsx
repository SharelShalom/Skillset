

const RenderButton = ( button, onClicked) => {
    return (
        <button
        key={button.id}
        id={button.id}
        onClick={() => onClicked(button)}
        >
          {button.text}
        </button>
    )
};

export default RenderButton;