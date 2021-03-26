import { useContext, useEffect, useState } from 'react';
import { DogesCountContext } from '../../context/DogeCountContext';
import { Container, Items } from "./styles";

export function Shop() {
  const { 
    doges,
    buyItem,
    items,
  } = useContext(DogesCountContext)

  //This is so ugly 🤮
  const [isEnoughForDoger, setIsEnoughForDoger] = useState(false);
  const [isEnoughForGrandma, setIsEnoughForGrandma] = useState(false);

  useEffect(() => {
    (doges < items.doger.price) ? setIsEnoughForDoger(true) : setIsEnoughForDoger(false)
  }, [doges, items.doger.price])

  useEffect(() => {
    (doges < items.grandma.price) ? setIsEnoughForGrandma(true) : setIsEnoughForGrandma(false)
  }, [doges, items.grandma.price])

  return(
    <Container>
      <h2>Shop</h2>
      <Items>
        <div className="doger">
          <button 
            type="button"
            disabled={isEnoughForDoger}
            title="Gives you 1 doge each 10 seconds"
            onClick={() => 
              {
                buyItem('doger')            
              }
            }
          >
            Dogers
          </button>
          <span>Cost: {items.doger.price}</span>
          <span>Owned: {items.doger.owned}</span>
          <span>Produces {1/items.doger.interval*1000} doges/sec</span>
        </div>
        
        <div className="grandma">
          <button 
            type="button" 
            disabled={isEnoughForGrandma}
            title="Gives you 5 doges each 8 seconds"
            onClick={() => 
              {
                buyItem('grandma')
              }
            }
          >
              Grandma
            </button>
            <span>Cost: {items.grandma.price}</span>
            <span>Owned: {items.grandma.owned}</span>
            <span>Produces {1/items.grandma.interval*1000} doges/sec</span>
        </div>
      </Items>
      
    </Container>
  );
}