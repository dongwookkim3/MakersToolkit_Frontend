"use client";

import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, "1301/");

    // 실시간 데이터 가져오기
    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        setData("데이터 없음");
      }
    });
  }, []);

  return (
    <div>
      <h1>실시간 데이터</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}