//https://clips.twitch.tv/AverageGeniusMinkMingLee leffen likes toradora
class TableType extends React.Component{
  constructor(props){
    super(props);
    /* Ok right here if I want to do anything with the props they sent in they I might have it interact with the state*/
  }

  render(){
    /* Making a table elem thing righ here*/
    table = (
      <div   >
        <TableRow type="0" />
        <TableRow type="Bug" />
        <TableRow type="Dark" />
        <TableRow type="Dragon" />
        <TableRow type="Electric" />
        <TableRow type="Fairy" />
        <TableRow type="Fighting" />
        <TableRow type="Fire" />
        <TableRow type="Flying" />
        <TableRow type="Ghost" />
        <TableRow type="Grass" />
        <TableRow type="Ground" />
        <TableRow type="Ice" />
        <TableRow type="Normal" />
        <TableRow type="Poison" />
        <TableRow type="Psychic" />
        <TableRow type="Rock" />
        <TableRow type="Steel" />
        <TableRow type="Water" />
      </div>)
    return (
      table
    );/*This is the end of return */
  }
}

class TableRow extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const type = this.props.type;
    let returnedRow;
    if ( type != "0") {
      returnedRow = (
        <tr class="type" id={this.props.type} > {this.props.type}
          <TableSquare word="Zero " />
          <TableSquare word="Point 25" />
          <TableSquare word="Point 5" />
          <TableSquare word="Integer 1" />
          <TableSquare word="Integer 2" />
          <TableSquare word="Integer 4" />
        </tr>
      );
    }
    else{
      returnedRow = (
        <tr id="RowWeakness"> Strength of Hit
            <td > 0x </td>
            <td> 0.25x </td>
            <td > 0.5x </td>
            <td> 1x </td>
            <td > 2x </td>
            <td> 4x </td>
        </tr>
      );
    }
    return(
      returnedRow
    );
  }
}

class TableSquare extends React.Component{
  constructor(props){
    super(props);
    this.state = {num : 0};
  }

  render(){
    return(
        <td class="square"> {this.state.num} {this.props.word} </td>
    );
  }
}


 ReactDOM.render( <TableType/>,   document.getElementById('table') );
