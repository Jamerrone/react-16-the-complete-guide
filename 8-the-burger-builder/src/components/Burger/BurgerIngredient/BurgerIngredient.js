import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {
    ingredient = null;

    switch (this.props.type) {
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
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
