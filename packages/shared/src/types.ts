/*
const DATA: IEvent[] = [
  {
    "id": "",
    "name": "",
    "location": {
      name: "",
      googleMapEmbedUrl: "",
    },
    "date": "2022-02-23",
    "brief":"",
    "description":"",
    "links": [{
      name: "more info",
      url: "",
      image: ""
    }],
    "images": [
      "",
    ],
    "categories": ["war", "racism", "society", "politics", "economy"]
  }
]
*/

export interface ILocation {
  name: string,
  googleMapEmbedUrl: string,
}

export interface ILink {
  name: string,
  url: string,
  image?: string,
}

export interface IEvent {
  id: string,
  name: string,
  location: ILocation,
  date: date,
  brief: string,
  description: string,
  links: ILink[],
  images: string[],
  categories: string[],
}