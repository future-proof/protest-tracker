import {
  IEvent,
} from '@protest-tracker/shared/src/types'

const event: IEvent = {
  "id": "event1",
  "name": "Kill the bill protests",
  "location": {
    name: "london",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24556.5686072176!2d-2.608100000000009!3d51.45454039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2suk!4v1645873548689!5m2!1sen!2suk",
  },
  "description":"Introduction of a crime bill that broadens police powers to regulate protests, and aggressive police response to violence against women protests.",
  "links": [{
    name: "more info",
    url: "https://www.theguardian.com/law/2022/jan/17/kill-the-bill-protests-new-legislation-proportionate-robert-buckland",
    image: "https://i.guim.co.uk/img/media/1c327a2aa65788a76cb8b5564189e3689f75a0a9/0_245_5472_3283/master/5472.jpg?width=700&quality=85&auto=format&fit=max&s=b506bd7a21541b07136df51d7f951303",

  }],
  "images": [
    "https://i.guim.co.uk/img/media/1c327a2aa65788a76cb8b5564189e3689f75a0a9/0_245_5472_3283/master/5472.jpg?width=700&quality=85&auto=format&fit=max&s=b506bd7a21541b07136df51d7f951303",
  ]
}

const DATA: IEvent[] = [
  event,
  event,
  event,
  event,
]

export default function useEventData(): IEvent[] {
  return DATA
}