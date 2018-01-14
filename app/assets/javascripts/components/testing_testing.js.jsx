var TestingTesting = createReactClass({

  render: function() {
    var temp = this.props.data[0] ? this.props.data[0] : "Loading...!";
    console.log('temp: ', temp );

    return(
      <div>
        <ul>
          <li>{temp.date}</li>
          <li>{temp.liftname}</li>
          <li>{temp.ismetric ? "Yes" : "No"}</li>
          <li>{temp.weightlifted}</li>
          <li>{temp.onerm}</li>
          <li>{temp.repsperformed}</li>
        </ul>
      </div>
    );
  }
});
