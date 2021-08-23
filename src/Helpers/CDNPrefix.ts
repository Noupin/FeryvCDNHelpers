import { CDN_BASE_URL, videoTypes } from "../constants"

export function getCDNPrefix(filename: string, baseURL=CDN_BASE_URL){
  if(videoTypes.indexOf(filename!.split('.').pop()!) !== -1){
    return `${baseURL}/video/`
  }
  else{
    return `${baseURL}/image/`
  }
}