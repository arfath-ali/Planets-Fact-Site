const PlanetsStats = ({
  RotationTimeValue,
  RevolutionTimeValue,
  RadiusValue,
  Temp,
  styles,
  labelStyles,
  valueStyles,
}) => {
  return (
    <>
      <div className={styles}>
        <p className={labelStyles}>Rotation Time</p>
        <p className={valueStyles}>{RotationTimeValue} </p>
      </div>

      <div className={styles}>
        <p className={labelStyles}>Revolution Time</p>
        <p className={valueStyles}>{RevolutionTimeValue}</p>
      </div>

      <div className={styles}>
        <p className={labelStyles}>Radius</p>
        <p className={valueStyles}>{RadiusValue}</p>
      </div>

      <div className={styles}>
        <p className={labelStyles}>Average Temp.</p>
        <p className={valueStyles}>{Temp}</p>
      </div>
    </>
  );
};

export default PlanetsStats;
