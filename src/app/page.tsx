//src/app/page.tsx
"use client";

import { useState } from "react";

import { modules } from "@/modules/modules";

import ObjectBrowser from "@/components/ObjectBrowser";
import RelationBrowser from "@/components/RelationBrowser";

export default function Home() {

    const [activeModule, setActiveModule] =
        useState("objects");

    return (

        <main className="p-6">

            <h1 className="text-2xl font-bold mb-4">

                Kennisomgeving

            </h1>


            <div className="flex gap-2 border-b mb-6">

                {modules.map(module => (

                    <button

                        key={module.id}

                        onClick={() =>
                            setActiveModule(module.id)
                        }

                        className={
                            activeModule === module.id
                                ? "px-4 py-2 border-b-2 font-bold"
                                : "px-4 py-2"
                        }

                    >

                        {module.title}

                    </button>

                ))}

            </div>


            {activeModule === "objects" &&

                <ObjectBrowser />

            }


            {activeModule === "relations" &&

                <RelationBrowser />

            }


            {activeModule !== "objects" &&
             activeModule !== "relations" &&

                <div className="text-gray-500">

                    Module nog niet geïmplementeerd.

                </div>

            }

        </main>

    );

}