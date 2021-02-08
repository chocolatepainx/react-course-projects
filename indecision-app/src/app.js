console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
    </ol>
  </div>
);

var user = {
  name: 'John',
  age: 29,
  location: 'Toronto'
};

function getLocation(location){
  if (location){
    return <p>Location: {location}</p>;
  }
}

var template_two = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age }</p>}
      {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
