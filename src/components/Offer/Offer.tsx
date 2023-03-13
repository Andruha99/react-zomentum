import './styles.scss';
import {ReactComponent as OnePlatformIcon} from "../../assets/icons/one-platform.svg"
import {ReactComponent as SearchIcon} from "../../assets/icons/find.svg";
import {ReactComponent as GrowIcon} from "../../assets/icons/grow.svg";

export const Offer = () => {
  return (
    <div className="offer">
      <div className="offer__container container">
        <h2 className="offer__title">List. Sell. Grow</h2>
        <div className="offer__container-inner">
          <div className="offer__card offer__card--img1">
            <OnePlatformIcon />
            <h5 className="offer__card-text">Be a part of the only  All-In-One platform for IT services</h5>
          </div>
          <div className="offer__card offer__card--find">
            <SearchIcon />
            <h5 className="offer__card-text">Come closer to finding your next customer</h5>
          </div>
          <div className="offer__card offer__card--grow">
            <GrowIcon />
            <h5 className="offer__card-text">Grow your business with a single click</h5>
          </div>
        </div>
      </div>
    </div>
  )
}