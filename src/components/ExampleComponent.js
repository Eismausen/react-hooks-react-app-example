import React from "react";

// no need to modify anything in here. The second test is looking for the returned JSX from this component
function ExampleComponent() {
  return (
    <div className="example">
      <img
        src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
        alt="a deeply impressed man, perhaps thinking 'whoa'"
        title="whoa! you almost know what you're doing, Davery!"
      />
      <p>Whoa!</p>
      <p>So it looks like React acts as a convenient wrapper for structuring HTML/JavaScript?</p>
    </div>
  );
}

export default ExampleComponent;
