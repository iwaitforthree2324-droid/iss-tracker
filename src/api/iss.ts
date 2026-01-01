import type { IssPositionResponse } from "../types/iss";

export async function fetchIssPosition(): Promise<IssPositionResponse>{
    const res = await fetch('/api/getIss');
    if(!res.ok){
        throw new Error('Cannot get current ISS location');
    }
    return res.json();
}