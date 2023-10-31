import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const useProductos = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "orders");

    getDocs(itemCollection)
      .then((snapshot) => {
        if (!snapshot.empty) {
          setItems(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }
      })
      
  }, []);

  return items;
};

export default useProductos;