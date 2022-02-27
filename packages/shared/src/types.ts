/*

const event: Event = {
  "id": "event1"
  "name": "Some really cool thing",
  "location": {
    name: "geo-location",
    long: 45,
    lat: 58,
  },
  "description":"whats the cause",
  "links": [{
    name: "more info",
    url: "https://www.google.com",
    image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",

  }],
  "images": [
    "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  ]
}

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
}