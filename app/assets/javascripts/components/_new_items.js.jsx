var NewItem = React.createClass({
handleClick() {
  var name = this.refs.name.value;
  var description = this.refs.description.value;
$.ajax({
  url: '/api/v1/items',
  type: 'POST',
  data: { item: {name: name, description: description }},
  success: (item) => {
    this.props.handleSubmit(item);
    console.log("It worked", item);
    }
  });
this.refs.name.value ="";
this.refs.description.value ="";
},

  render() {
    return (
      <div className="inputs">
        <input ref='name' placeholder='Enter the name of the item' className="field"/>
        <input ref='description' placeholder='Entrer a description' className="field"/>
          <button onClick={this.handleClick}>Submit</button>
        </div>
        )
   }
});
