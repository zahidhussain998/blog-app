import { createClient } from "next-sanity";

export const projectId = "pel38u82";
export const dataset = "production";
 export const apiVersion = "2022-11-15";



export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,



});

