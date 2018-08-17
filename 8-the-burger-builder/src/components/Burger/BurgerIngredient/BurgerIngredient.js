import React from 'react';

import classes from './BurgerIngredient.css';

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={classes.BurgerBottom} />;
      break;
    case 'bread-top':
      ingredient = (
        <div className={classes.BurgerTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds1} />
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className={classes.Meat} />;
      break;
    case 'cheese':
      ingredient = <div className={classes.Cheese} />;
      break;
    case 'salad':
      ingredient = <div className={classes.Salad} />;
      break;
    case 'bacon':
      ingredient = <div className={classes.Bacon} />;
      break;
    default:
      ingredient = null;
      break;
  }

  return ingredient;
};

export default burgerIngredient;
