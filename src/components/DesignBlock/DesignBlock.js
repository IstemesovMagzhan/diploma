import classes from "./DesignBlock.module.css";
import { FcApproval } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";

function DesignBlock() {
  return (
    <>
      <div className={classes.DesignBlock}>
        <div className={classes.col}>
          <div className={classes.foricons}><FcApproval /></div>
          <h1>Quality Design</h1>
          <p>We ensure quality products every time because a comfortable space is a happy workplace.</p>
        </div>
        <div className={classes.col}>
          <div className={classes.foricons}><FcAlarmClock /></div>
          <h1>Fast & Free Shipping</h1>
          <p>Orders ship for free within 24 hours, so you can get your office set up and running as soon as possible.</p>
        </div>
        <div className={classes.col}>
          <div className={classes.foricons}><FcGlobe /></div>
          <h1>Sustainably Made</h1>
          <p>Every piece is designed to minimize our carbon footprint and support a cleaner, safer and more sustainable future.</p>
        </div>

      </div>

    </>
  );
}

export default DesignBlock;