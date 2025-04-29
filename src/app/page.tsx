"use client";
import { useEffect, useState } from "react";
import { Event } from "../types";

export default function Home() {
  const [shopId, setShopId] = useState<string>();
  const [data, setData] = useState<Event[]>();

  useEffect(() => {
    fetch(`/api/events?shopId=${shopId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [shopId]);

  return (
    <div>
      <div>Enter shop id:</div>
      <input onChange={(e) => setShopId(e.target.value)} />
      {!!shopId && (
        <>
          <div>{`\nEvents of shop ${shopId}:`}</div>
          {data?.map((event, index) => (
            <li key={index}>
              {`Event of type ${event.type} with payload: ${JSON.stringify(
                event.payload
              )}`}
            </li>
          ))}
        </>
      )}
    </div>
  );
}
