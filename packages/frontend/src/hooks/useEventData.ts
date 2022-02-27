import {
  IEvent,
} from '@protest-tracker/shared/src/types'

const DATA: IEvent[] = [
  {
    "id": "01",
    "name": "Anti War and Russian Invasion",
    "location": {
      name: "london",
      googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1845772786064!2d-0.1941999484081005!3d51.509829629535595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ff78740185d%3A0x881a617dffc2ee96!2sEmbassy%20of%20the%20Russian%20Federation!5e0!3m2!1sen!2suk!4v1645931246578!5m2!1sen!2suk",
    },
    "brief":"Russian invasion brings hundreds on to the streets in protest and to demand stronger action from the west.",
    "description":"On February, Russian forces invaded Ukraine. This is a bigger brief of what the protests are regarding. Sanctions on Russia, removal of Russia frm swift payment system. Removal of Russia from participation in global entertainment events. Assests frozen. Etc.",
    "links": [{
      name: "more info",
      url: "https://www.theguardian.com/world/2022/feb/26/we-want-more-sanctions-ukrainians-rally-in-london-and-across-uk",
      image: "https://i.guim.co.uk/img/media/6db65d9e788091755fc5d8d04ea221a0c2ee802a/0_183_3500_2101/master/3500.jpg?width=700&quality=85&auto=format&fit=max&s=1eaeccadadb109a4768c64941803296a",

    }],
    "images": [
      "https://i.guim.co.uk/img/media/6db65d9e788091755fc5d8d04ea221a0c2ee802a/0_183_3500_2101/master/3500.jpg?width=700&quality=85&auto=format&fit=max&s=1eaeccadadb109a4768c64941803296a",
    ]
  },
  {
    "id": "02",
    "name": "Kill The Bill",
    "location": {
      name: "london",
      googleMapEmbedUrl: "http://maps.google.com/maps?q=12.927923,77.627108&z=15&output=embed"
    },
    "brief":"Introduction of a crime bill that broadens police powers to regulate protests, and aggressive police response to violence against women protests.",
    "links": [{
      name: "more info",
      url: "https://www.theguardian.com/law/2022/jan/17/kill-the-bill-protests-new-legislation-proportionate-robert-buckland",
      image: "https://i.guim.co.uk/img/media/1c327a2aa65788a76cb8b5564189e3689f75a0a9/0_245_5472_3283/master/5472.jpg?width=700&quality=85&auto=format&fit=max&s=b506bd7a21541b07136df51d7f951303",

    }],
    "images": [
      "https://i.guim.co.uk/img/media/1c327a2aa65788a76cb8b5564189e3689f75a0a9/0_245_5472_3283/master/5472.jpg?width=700&quality=85&auto=format&fit=max&s=b506bd7a21541b07136df51d7f951303",
    ]
  }
]

export default function useEventData(): IEvent[] {
  return DATA
}



