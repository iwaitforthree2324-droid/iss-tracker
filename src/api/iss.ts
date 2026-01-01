import type { IssPositionResponse } from "../types/iss";

export async function fetchIssPosition(): Promise<IssPositionResponse>{
    const res = await fetch('http://api.open-notify.org/iss-now.json');
    if(!res.ok){
        throw new Error('ISSの位置情報を取得できませんでした');
    }
    return res.json();
}