import React from 'react';
import {ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
export function GeneralPolls(props){
  return(
    <div className="fluid-container">
    {buttonsInstance}
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    <h1>Container</h1>
    </div>
  )
}

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

function renderDropdownButton(title, i) {
  return (
    <DropdownButton
      bsStyle={title.toLowerCase()}
      title={title}
      key={i}
      id={`dropdown-basic-${i}`}
    >
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>
        Active Item
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  );
}

const buttonsInstance = (
  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
);
