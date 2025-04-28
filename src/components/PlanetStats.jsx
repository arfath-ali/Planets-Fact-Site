const PlanetsStats = ({
  RotationTimeValue,
  RevolutionTimeValue,
  RadiusValue,
  Temp,
}) => {
  const styles =
    'flex justify-between items-center md:flex-col md:items-start px-6 py-4 border border-dark-gray md:pr-[3.375rem] md:gap-1.5';

  const labelStyles =
    'font-bold leading-md tracking-base opacity-50 text-[0.5rem] uppercase lg:text-[0.6875rem]';

  const valueStyles =
    'font-antonio font-weight-medium text-[1.25rem] tracking-smaller leading-md md:text-2xl lg:text-[2.5rem]';

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
