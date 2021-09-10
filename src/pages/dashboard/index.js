import React, { useEffect, useState, Fragment } from "react";
import { db } from "../../config/firebase";
export default function App() {

  useEffect(() => {
    console.log('db', db.ref("/").once("value"))
    db.ref('/employees').orderByChild("email")
      .equalTo('e1000@gmail.com').once('value', (snapshot) => {
        const data = snapshot.val();
        console.log('data', data)
      });
  }, []);

  return (
    <>
      <h1>data from google sheets</h1>
      <ul>
        {/* {data.map((item, i) => (
          <Fragment key={i}>
            <li>URL -- {item.URL}</li>
            <li>Email - {item.email}</li>
            <li>Token - {item.token}</li>
            <br />
          </Fragment>
        ))} */}
      </ul>
    </>
  );
}