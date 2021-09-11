import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import Summary from "./summary";
import Header from "./selections";
import styles from "./styles.module.css";

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    db.ref('/').child("employees").orderByChild("email")
      .equalTo('e1001@gmail.com').once('value', (snapshot) => {
        const data = snapshot.val();
        setData(data)
      });
  }, []);

  return (
    <div className={styles.container}>
      <Header
        isAdmin
      />
      <Summary data={data} />
    </div>
  );
}