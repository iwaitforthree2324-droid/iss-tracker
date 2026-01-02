import type { IssPositionResponse } from "../types/iss";

export async function fetchIssPosition(): Promise<IssPositionResponse>{
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    if(!res.ok){
        throw new Error('Cannot get current ISS location');
    }
    return res.json();
}