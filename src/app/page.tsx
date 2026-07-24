"use client";

import { useState } from "react";
import ObjectBrowser from "@/components/ObjectBrowser";

const tabs = [
  "Objecten",
  "Relaties",
  "Parameters",
  "Waarden",
  "Import/export",
];

export default function Home() {

  const [activeTab, setActiveTab] = useState("Objecten");

  return (
    <main className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Kennisomgeving
      </h1>

      <div className="flex gap-2 border-b mb-6">

        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={
              activeTab === tab
              ? "px-4 py-2 border-b-2 font-bold"
              : "px-4 py-2"
            }
          >
            {tab}
          </button>
        ))}

      </div>


      {activeTab === "Objecten" &&
        <ObjectBrowser />
      }


      {activeTab !== "Objecten" &&
        <div className="text-gray-500">
          Module {activeTab} volgt later
        </div>
      }

    </main>
  );
}