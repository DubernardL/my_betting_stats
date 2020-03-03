import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Bet = (props) => {
  let id = 0;
  return (
    <Accordion defaultActiveKey="1">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {props.odd.label_name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div className="odds row">
            {
              props.odd.values.map((bet) => {
                return(
                  <div className="odd col-4" key={id += 1}>
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
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Bet;
