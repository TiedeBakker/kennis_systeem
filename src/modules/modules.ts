export interface ModuleDefinition {

    id: string;

    title: string;

    enabled: boolean;

}

export const modules: ModuleDefinition[] = [

    {
        id: "objects",
        title: "Objecten",
        enabled: true,
    },

    {
        id: "relations",
        title: "Relaties",
        enabled: true,
    },

    {
        id: "relationValues",
        title: "Relatiegegevens",
        enabled: true,
    },

    {
        id: "parameters",
        title: "Parameters",
        enabled: false,
    },

    {
        id: "parameterValues",
        title: "Parameterwaarden",
        enabled: false,
    },

    {
        id: "importExport",
        title: "Import/export",
        enabled: false,
    },

];