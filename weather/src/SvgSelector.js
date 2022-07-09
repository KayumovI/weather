import PropTypes from "prop-types";
import Sun from "./images/icons/Sun.svg";
import Cloud from "./images/icons/Cloud.svg";
import ScattedCloud from "./images/icons/CloudScattered.svg";
import BrokenCloud from "./images/icons/BrockenClouds.svg";
import ShowerRain from "./images/icons/ShowerRain.svg";
import Rain from "./images/icons/Rain.svg";
import Thunderstorm from "./images/icons/Thunderstorm.svg";
import Snow from "./images/icons/Snow.svg";
import Mist from "./images/icons/Mist.svg";

function SvgSelector(props) {
    const { cssClass, code } = props;
    let svgSelect;
    switch(code){
        case"01d":
        svgSelect = Sun;
        break;
        case"01n":
        svgSelect = Sun;
        break;
        case"02d":
        svgSelect = Cloud;
        break;
        case"02n":
        svgSelect = Cloud;
        break;
        case"03d":
        svgSelect = BrokenCloud;
        break;
        case"03n":
        svgSelect = BrokenCloud;
        break;
        case"04d":
        svgSelect = ScattedCloud;
        break;
        case"04n":
        svgSelect = ScattedCloud;
        break;
        case"09d":
        svgSelect = ShowerRain;
        break;
        case"09n":
        svgSelect = ShowerRain;
        break;
        case"10d":
        svgSelect = Rain;
        break;
        case"10n":
        svgSelect = Rain;
        break;
        case"11d":
        svgSelect = Thunderstorm;
        break;
        case"11n":
        svgSelect = Thunderstorm;
        break;
        case"13d":
        svgSelect = Snow;
        break;
        case"13n":
        svgSelect = Snow;
        break;
        case"50d":
        svgSelect = Mist;
        break;
        case"50n":
        svgSelect = Mist;
        break;
        default:
        svgSelect = null;
        break
    }
    return <img className={cssClass} src={svgSelect} alt={code}/>
}
SvgSelector.propTypes = {
    code: PropTypes.string,
    cssClass: PropTypes.string,
  };
  
  SvgSelector.defaultProps = {
    code: "50n",
    cssClass: "cloudDescriptionIcon",
  };
  
  export default SvgSelector;