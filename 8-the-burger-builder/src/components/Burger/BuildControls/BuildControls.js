import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>$ {props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        added={() => props.ingredientAdded(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        key={ctrl.label}
        label={ctrl.label}
        removed={() => props.ingredientRemoved(ctrl.type)}
      />
    ))}
  </div>
);

export default buildControls;
