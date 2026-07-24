"use client";

import { useEffect, useState } from "react";
import ObjectEditor from "./ObjectEditor";


type ObjectItem = {
  id:string;
  label:string;
  validFrom:string|null;
  validTo:string|null;
};


export default function ObjectBrowser(){

  const [items,setItems] =
    useState<ObjectItem[]>([]);

  const [selected,setSelected] =
    useState<ObjectItem|null>(null);


  async function load(){

    const r =
      await fetch("/api/objects");

    setItems(await r.json());

  }


  useEffect(()=>{
    load();
  },[]);



  return (

    <div className="grid grid-cols-2 gap-6">


      <section>

        <h2 className="font-bold mb-2">
          Objecten
        </h2>


        <button
          onClick={() =>
             setSelected(null)
          }
          className="border px-3 py-1 mb-3"
        >
          Nieuw object
        </button>


        <ul className="border">

        {items.map(o =>

          <li
            key={o.id}
            onClick={() =>
              setSelected(o)
            }
            className="p-2 hover:bg-gray-100 cursor-pointer"
          >
            {o.label}
          </li>

        )}

        </ul>

      </section>



      <ObjectEditor
        object={selected}
        onSaved={load}
      />


    </div>

  );

}