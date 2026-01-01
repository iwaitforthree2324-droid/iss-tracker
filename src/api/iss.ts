import type { IssPositionResponse } from "../types/iss";

export async function fetchIssPosition(): Promise<IssPositionResponse>{
    const res = await fetch('/api/getIss');
    if(!res.ok){
        throw new Error('ISSの位置情報を取得できませんでした');
    }
    return res.json();
}