import React from 'react';
import "./filterBar.css";
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';

export default class FilterBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleSeason= this.toggleSeason.bind(this);
    this.toggleName= this.toggleName.bind(this);
    this.toggleOpponent = this.toggleOpponent.bind(this);
    this.togglePosition = this.togglePosition.bind(this);
    this.toggleHighlights = this.toggleHighlights.bind(this);
    this.state = {
      dropdownOpenSeason: false,
      dropdownOpenName: false,
      dropdownOpenOpponent: false,
      dropdownOpenPosition: false,
      dropdownOpenHighlights: false
    };
  }

  toggleSeason() {
    this.setState({
      dropdownOpenSeason: !this.state.dropdownOpenSeason,
     
    });
  }
  toggleName(){
      this.setState({
          dropdownOpenName: !this.state.dropdownOpenName
      })
  }
  toggleOpponent(){
      this.setState({
          dropdownOpenOpponent: !this.state.dropdownOpenOpponent
      })
  }
  togglePosition(){
      this.setState({
          dropdownOpenPosition: !this.state.dropdownOpenPosition
      })
  }
  toggleHighlights(){
    this.setState({
      dropdownOpenHighlights: !this.state.dropdownOpenHighlights
    })
  }

  render() {
    return (
      <div>
        <Nav tabs>
        <p>Filter By: </p>
          <Dropdown nav isOpen={this.state.dropdownOpenSeason} toggle={this.toggleSeason}>
            <DropdownToggle nav caret>
              Season
            </DropdownToggle>
            <DropdownMenu>
              
              <DropdownItem value ={this.props.season1} onClick={this.props.toggleFilter}>{this.props.season1}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpenName} toggle={this.toggleName}>
            <DropdownToggle nav caret>
              Player
            </DropdownToggle>
            
            <DropdownMenu>
              
                <DropdownItem value ={this.props.player1} onClick={this.props.toggleFilter} >{this.props.player1}</DropdownItem>
                <DropdownItem value ={this.props.player2} onClick={this.props.toggleFilter}>{this.props.player2}</DropdownItem>
                <DropdownItem value ={this.props.player3} onClick={this.props.toggleFilter} >{this.props.player3}</DropdownItem>
                <DropdownItem value ={this.props.player4} onClick={this.props.toggleFilter} >{this.props.player4}</DropdownItem>
                <DropdownItem value ={this.props.player5} onClick={this.props.toggleFilter} >{this.props.player5}</DropdownItem>
                <DropdownItem value ={this.props.player6} onClick={this.props.toggleFilter} >{this.props.player6}</DropdownItem>
                
              
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpenOpponent} toggle={this.toggleOpponent}>
            <DropdownToggle nav caret>
              Opponent
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem value ={this.props.opponent1} onClick={this.props.toggleFilter}>{this.props.opponent1}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpenPosition} toggle={this.togglePosition}>
            <DropdownToggle nav caret>
              Position
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem value={this.props.position1} onClick={this.props.toggleFilter}>{this.props.position1}</DropdownItem>
              <DropdownItem value ={this.props.position2} onClick={this.props.toggleFilter}>{this.props.position2}</DropdownItem>
              <DropdownItem value ={this.props.position3} onClick={this.props.toggleFilter}>{this.props.position3}</DropdownItem>
              <DropdownItem value ={this.props.position4} onClick={this.props.toggleFilter}>{this.props.position4}</DropdownItem>
              <DropdownItem value ={this.props.position5} onClick={this.props.toggleFilter}>{this.props.position5}</DropdownItem>
              
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpenHighlights} toggle={this.toggleHighlights}>
            <DropdownToggle nav caret>
              Highlights
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem value ={this.props.highlight2} onClick={this.props.toggleFilter}>{this.props.highlight1}</DropdownItem>
              <DropdownItem value ={this.props.highlight2} onClick={this.props.toggleFilter}>{this.props.highlight2}</DropdownItem>
              <DropdownItem value ={this.props.highlight3} onClick={this.props.toggleFilter}>{this.props.highlight3}</DropdownItem>
              <DropdownItem value ={this.props.highlight4} onClick={this.props.toggleFilter}>{this.props.highlight4}</DropdownItem>
              <DropdownItem value ={this.props.highlight5} onClick={this.props.toggleFilter}>{this.props.highlight5}</DropdownItem>
             
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </div>
    );
  }
}