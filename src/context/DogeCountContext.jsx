import { createContext, useEffect, useState } from 'react';
export const DogesCountContext = createContext();

export function DogesCountProvider({ children }) {    
  const [items, setItems] = useState(
    sessionStorage.getItem('items') ? JSON.parse(sessionStorage.getItem('items')) :
    {
      doger: {
        name: 'Doger',
        multiplier: 1.1,
        owned: 0,
        base_price: 10,
        price: 10,
        interval: 10000,
      },
      grandma: {
        name: 'Grandma',
        multiplier: 1.2,
        owned: 0,
        base_price: 100,
        price: 100,
        interval: 1000,
      },
    }
  );

  useEffect(() => {
    sessionStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const [doges, setDoges] = useState(
    sessionStorage.getItem('doges') ? parseInt(sessionStorage.getItem('doges')) : 0
  );


  //This is also ugly af
  useEffect(() => {
    if (items.doger.owned > 0) {
      for(let i = 0; i < items.doger.owned; i++) {
        setInterval(() => {
          setDoges(prevLikes => prevLikes + 1);
        }, items.doger.interval)
      }
    } else if (items.grandma.owned > 0) {
      for (let i = 0; i < items.grandma.owned; i++) {
        setInterval(() => {
          setGrandmas(prevLikes => prevLikes + 1);
        }, items.grandma.interval)
      }
    }
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  //Items/////////////////////
  const [doger, setDoger] = useState(
    sessionStorage.getItem('items') ? JSON.parse(sessionStorage.getItem('items')).doger.owned : 0
  );
  const [grandmas, setGrandmas] = useState(
    sessionStorage.getItem('items') ? JSON.parse(sessionStorage.getItem('items')).grandma.owned : 0
  );
  ////////////////////////////
  
  function click() {
    setDoges(doges + 1);
  }

  useEffect(() => {
    sessionStorage.setItem('doges', JSON.stringify(doges))
    console.log({doges: doges});
  }, [doges])

  useEffect(() => {
    setDoger(items.doger.owned)
  }, [items.doger.owned])

  useEffect(() => {
    setGrandmas(items.grandma.owned)
  }, [items.grandma.owned])

  function buyItem(itemName) {
    const item = items[itemName];
    if (doges < item.price) return alert(`You need ${item.price} likes to buy ${item.name}!`);
    
    setDoges(doges - item.price);
    const newPrice = Math.floor(item.base_price * Math.pow(1.20, item.owned + 1))
    console.log("New Price: " + newPrice); 
    console.log(`You bought a ${item.name}!`)
    setItems(prevItems => ({
      ...prevItems,
      [itemName]: {
        ...prevItems[itemName], 
        price: newPrice, 
        owned: prevItems[itemName].owned + 1 
      }
    }))
    setInterval(() => {
      setDoges(prevLikes => prevLikes + 1);
    }, item.interval)
  }

  return(
    <DogesCountContext.Provider value={
      { 
        doges, 
        click,
        buyItem,
        doger,
        grandmas,
        items,
      }
    }>
      {children}
    </DogesCountContext.Provider>
  );
}