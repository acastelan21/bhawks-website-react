import React from 'react';
import "./filterBar.css";
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';

export default class Example extends React.Component {
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
              <DropdownItem>2017</DropdownItem>
              <DropdownItem>2018</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpenName} toggle={this.toggleName}>
            <DropdownToggle nav caret>
              Player
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Player1</DropdownItem>
              <DropdownItem>Player2</DropdownItem>
              <DropdownItem>Player3</DropdownItem>
              <DropdownItem>Player4</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpenOpponent} toggle={this.toggleOpponent}>
            <DropdownToggle nav caret>
              Opponent
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Green Bay Packers</DropdownItem>
              <DropdownItem>Detroit Lions</DropdownItem>
              <DropdownItem>Minnesota Vikings</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpenPosition} toggle={this.togglePosition}>
            <DropdownToggle nav caret>
              Position
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Quarterback (QB)</DropdownItem>
              <DropdownItem>Runningback (RB)</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpenHighlights} toggle={this.toggleHighlights}>
            <DropdownToggle nav caret>
              Highlights
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Touchdown</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </div>
    );
  }
}