import React from 'react';

const Bet = (props) => {
  let id = 0;
  return (
    <div>
      <ul>
        <li>
          <div>
            <p>{props.odd.label_name}</p>
          </div>
          <div className="d-flex m-2">
            {
              props.odd.values.map((bet) => {
                return(
                  <div key={id += 1}>
                    <div>
                      {bet.value}
                    </div>
                    <button>
                      {bet.odd}
                    </button>
                  </div>
                )
              })
            }
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Bet;
