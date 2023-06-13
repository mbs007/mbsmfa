const JokeCard = (props) => {
  const { jokeData } = props;
  const { category, flags, safe, joke } = jokeData;
  
  const bgCol = safe ? 'bg-light' : 'bg-danger-subtle';
  
  const trueKeys = Object.keys(flags).filter((key) => flags[key] === true);
  //console.log(trueKeys);
  const hasFlags = trueKeys.length > 0;
  const fontSty = hasFlags ? 'fst-italic' : '';
  const fontWt = hasFlags ? "fw-bolder" : "fw-semibold";
  const textCol = hasFlags ? "text-warning" : "text-dark";
  
  return (
    <li className={`border mb-3 p-3 shadow-lg ${bgCol}`}>
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-body-secondary">Category - {category}</p>
        {hasFlags && <p className="text-info">Flags - {trueKeys.join(", ")}</p>}
      </div>
      <p className={`text-break ${fontWt} ${textCol} ${fontSty}`}>{joke}</p>
    </li>
  );
}

export default JokeCard