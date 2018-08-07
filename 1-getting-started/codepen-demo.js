//  This demo will NOT work on its own, please copy the content of each file into a new CodePen.
//  Don't forget to add React & ReactDom to your JS dependecies.

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
    </div>
  );
}

const app = (
  <div>
    <Person name="James" age="25" />
    <Person name="Max" age="28" />
  </div>
);

ReactDOM.render(app, document.querySelector("#app"));
