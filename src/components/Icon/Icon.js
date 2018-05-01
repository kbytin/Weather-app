import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO replace css/font implementation with direct SVG import after
// https://github.com/facebook/create-react-app/commit/d0e17316b965696328f0d76f1ff81e8c9c5d3802
// https://github.com/facebook/create-react-app/pull/3907
// merged to CRA master


import 'assets/css/weather-icons.min.css'
import SearchIcon from './SearchIcon';
import LoaderIcon from './LoaderIcon';
import LeftArrowIcon from  './LeftArrowIcon';

class Icon extends Component {
  static propTypes = {
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    className: PropTypes.string,
  }

  static defaultProps= {
    className: '',
  }

  getTypeOfTimeNow() {
    const {withDayTime} = this.props;

    if (!withDayTime) return '';

    const hours = new Date().getHours();
    const timeNow = hours > 6 && hours < 20 ? '-day' : '-night';

    return timeNow;
  }

  renderIcon() {
    const {icon, className, width, height} = this.props;

    if (typeof icon === 'number') {
        return <i className={[`wi wi-owm${this.getTypeOfTimeNow()}-${icon}`, className ].join(' ')} />;
    }
    switch(icon) {
      case ('search'):
        return <SearchIcon className={className} width={width} height={height} />;
      case ('loader'):
        return <LoaderIcon className={className} width={width} height={height} />;
      case ('leftArrow'):
        return <LeftArrowIcon className={className} width={width} height={height} />;
      default:
        return 'Icon not specified';
    }
  }

  render() {
    return this.renderIcon();
  }
}

export default Icon;