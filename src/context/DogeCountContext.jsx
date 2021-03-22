import { createContext, useEffect, useState } from 'react';
export const DogesCountContext = createContext();

export function DogesCountProvider({ children }) {    
  const [items, setItems] = useState(
    sessionStorage.getItem('items') ? JSON.parse(sessionStorage.getItem('items')) :
    {
      doger: {
        name: 'Doger',
        startPrice: 10,
        multiplier: 1.4,
        value: 1,
        owned: 0,
        price: 10,
        interval: 10000,
      },
      grandma: {
        name: 'Grandma',
        startPrice: 100,
        multiplier: 1.5,
        value: 8,
        owned: 0,
        price: 100,
        interval: 5000,
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
          setDoges(prevLikes => prevLikes + items.doger.value);
        }, items.doger.interval)
      }
    } else if (items.grandma.owned > 0) {
      for (let i = 0; i < items.grandma.owned; i++) {
        setInterval(() => {
          setGrandmas(prevLikes => prevLikes + items.grandma.value);
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
    const newPrice = Math.floor(item.price * item.multiplier) 
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
      setDoges(prevLikes => prevLikes + item.value);
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