import {
  IEvent,
} from '@protest-tracker/shared/src/types'


/*
{
  "id": "", // generated guid
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
    url: ""
  }],
  "images": [
    "",
  ],
  "categories": ["war", "racism", "society", "politics", "economy", "environment"]
}
*/

const DATA: IEvent[] = [
  {
    "id": "c59ddf07-4cd1-4224-81dd-d950cbd5bebe",
    "name": "Stand with Ukraine",
    "location": {
      name: "london",
      googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1845772786064!2d-0.1941999484081005!3d51.509829629535595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ff78740185d%3A0x881a617dffc2ee96!2sEmbassy%20of%20the%20Russian%20Federation!5e0!3m2!1sen!2suk!4v1645931246578!5m2!1sen!2suk",
    },
    "date": "2022-02-23",
    "brief":"Russian invasion brings hundreds on to the streets in protest and to demand stronger action from the west.",
    "description":"On February, Russian forces invaded Ukraine. This is a bigger brief of what the protests are regarding. Sanctions on Russia, removal of Russia frm swift payment system. Removal of Russia from participation in global entertainment events. Assests frozen. Etc.",
    "links": [
      {
        name: "The Guardian",
        url: "https://www.theguardian.com/world/2022/feb/26/we-want-more-sanctions-ukrainians-rally-in-london-and-across-uk"
      }
    ],
    "images": [
      "https://i.guim.co.uk/img/media/6db65d9e788091755fc5d8d04ea221a0c2ee802a/0_183_3500_2101/master/3500.jpg?width=700&quality=85&auto=format&fit=max&s=1eaeccadadb109a4768c64941803296a",
    ],
    "categories": ["war"]
  },




  {
    "id": "64988dc5-821b-4918-94e6-ccbea54ddefe",
    "name": "Kill The Bill",
    "location": {
      name: "UK",
      googleMapEmbedUrl: "http://maps.google.com/maps?q=12.927923,77.627108&z=15&output=embed"
    },
    "date": "2021-12-23",
    "brief":"Introduction of a crime bill that broadens police powers to regulate protests, and aggressive police response to violence against women protests.",
    "description":"",
    "links": [{
      name: "more info",
      url: "https://www.theguardian.com/law/2022/jan/17/kill-the-bill-protests-new-legislation-proportionate-robert-buckland"
    }],
    "images": [
      "https://i.guim.co.uk/img/media/1c327a2aa65788a76cb8b5564189e3689f75a0a9/0_245_5472_3283/master/5472.jpg?width=700&quality=85&auto=format&fit=max&s=b506bd7a21541b07136df51d7f951303",
    ],
    "categories": ["politics"]
  },



  {
    "id": "c9696154-2a6a-4510-8a3e-63b92b1db4bf",
    "name": "Extinction Rebellion 2022",
    "location": {
      name: "Hyde Park, London",
      googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.623969866758!2d-0.1610892529778802!3d51.51035407416868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876054929181a85%3A0xd1af6c4f49b4bd0c!2sHyde%20Park!5e0!3m2!1sen!2suk!4v1645933820483!5m2!1sen!2suk"
    },
    "date": "2022-04-09",
    "brief":"As our planet passes multiple tipping points and the UK sleepwalks into authoritarianism, what XR does this year affects everything.",
    "description": "Share this event everywhere, and invite your friends, your family, and your neighbours. \n Book time off work from April 9th-17th and be ready to continue in civil resistance in London on at least the first 3 weekends following the 17th. \n As our planet passes multiple tipping points and the UK sleepwalks into authoritarianism, what XR does this year affects everything. \n With a simple unstoppable rebellion design we will make space for thousands of new people to join us in April and tip the scales once again towards radical change on the climate and ecological emergency. \n In April, we call on everyone to take action and demand an end to the fossil economy, for the UK government to immediately stop the harm that is happening right now and end fossil fuel investments. We will facilitate a mass flood of people to grind the capital to a halt, causing maximum material disruption and making meeting the immediate demand politically unavoidable. \n Our disruption will not stop until the fossil fuel economy comes to an end. \n Our action will take place under a clear, unified message, inviting everyone to come together under one aligned plan. \n Will you sit back and do nothing? Or will you step up? \n We will rebel until we end the fossil fuel economy. \n We will not be bystanders. \n Let’s step up, April 9th 2022.",
    "links": [
      {
        name: "Website",
        url: "https://extinctionrebellion.uk/event/extinction-rebellion-2022/",
      },
      {
        name: "Make a commitment",
        url: "https://actionnetwork.org/forms/xruk-commitment-2022",
      },
      {
        name: "Donate",
        url: "https://chuffed.org/project/xrapril2022",
      },
      {
        name: "Sign up",
        url: "https://extinctionrebellion.uk/join-us/#sign-up-form",
      },
      {
        name: "Telegram",
        url: "https://t.me/rebellionbroadcast"
      }
    ],
    "images": [
      "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/273672764_254008606903116_6038883558402038622_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=1091cb&_nc_ohc=QriXX3jWw2YAX_LlD2I&_nc_ht=scontent-lhr8-1.xx&edm=AJKTm1sEAAAA&oh=00_AT_ijYkcsBbd9bm_z0CWuTwh1Osr05UoRbmjMLhLK19tFQ&oe=621FFE5E",
    ],
    "categories": ["environment", "politics"]
  },

  {
    "id": "b762b888-2726-4435-b534-e9a9aab5ac81",
    "name": "Cost Of Living Crisis",
    "location": {
      name: "UK",
      googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.623969866758!2d-0.1610892529778802!3d51.51035407416868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876054929181a85%3A0xd1af6c4f49b4bd0c!2sHyde%20Park!5e0!3m2!1sen!2suk!4v1645933820483!5m2!1sen!2suk"
    },
    "date": "2022-03-05",
    "brief":"COST OF LIVING CRISIS. WE CAN’T PAY – FURTHER ACTION – 5TH MARCH",
    "description": "3 THINGS THE TORIES CAN DO EASILY TO SLASH LIVING COSTS.      1. FREEZE ENERGY PRICES. GOVERNMENTS IN OTHER COUNTRIES HAVE TAKEN STEPS TO PROTECT THE PUBLIC BY CAPPING BILLS (FRANCE 4%), FREEZING PRICES (PORTUGAL) AND COVERING 80% OF EXCESS BILLS (DENMARK). IN NORWAY A PERMANENT WINDFALL TAX ENERGY COMPANIES OF 56% IS APPLIED ON TOP OF CORPORATION TAX. WHY NOT HERE? 2. INCREASE WAGES AND BENEFITS        REAL TERMS PAY AND PENSION CUTS (NURSES -5% (PENSIONS -4%) LEAVE MILLIONS UNABLE TO AFFORD THE BASICS. ENERGY PRICE RISES WILL PUSH MORE PEOPLE INTO FUEL POVERTY. THIS IS HAPPENING WHILE OIL AND GAS FIRMS POST RECORD PROFITS AND BOAST OF BUSINESS AS BEING LIKE A CASH MACHINE FOR SHAREHOLDERS.            3. INVEST IN LOW CARBON ENERGY. WE NEED A PUBLICLY OWNED RENEWABLE ENERGY SYSTEM THAT IS RUN FOR THE BENEFIT OF PEOPLE, NOT PRIVATE PROFIT AND SHAREHOLDERS. CURRENTLY 50% OF THE UK'S ENERGY IS RENEWABLE BUT ONLY 0.07% IS PUBLICLY OWNED! PUBLIC OWNERSHIP IN LOW CARBON TECHNOLOGIES WOULD LOWER BILLS AND POLLUTION, CREATE MILLIONS OF JOBS AND INCREASE ENERGY SECURITY.",
    "links": [
      {
        name: "Website",
        url: "https://thepeoplesassembly.org.uk/",
      },
      {
        name: "Resources",
        url: "https://thepeoplesassembly.org.uk/cost-of-living-crisis-we-cant-pay-resources/",
      }
    ],
    "images": [
      "https://thepeoplesassembly.org.uk/wp-content/uploads/2022/02/Cant-pay-5-march.png",
    ],
    "categories": ["society", "politics", "economy"]
  },


  {
    "id": "4a50f06d-ffc4-46b4-83f7-74a5e466f5d8",
    "name": "Stand with Ukraine 2",
    "location": {
      name: "Downing Street, London",
      googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5435262285564!2d-0.12977848423017466!3d51.50324367963439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c56c62ad19%3A0x4514c146072d8c!2sDowning%20St%2C%20London!5e0!3m2!1sen!2suk!4v1645934490292!5m2!1sen!2suk",
    },
    "date": "2022-02-25",
    "brief":"Thursday saw hundreds of protesters outside Downing Street demanding greater sanctions on Russia.",
    "description":"Further “Stand with Ukraine” protests are planned in London this weekend as the Russian invasion of Ukraine continues. A rally is due to take place at Downing Street at midday on Saturday 25 February, continuing the protests seen in the capital since Russian troops began their offensive",
    "links": [{
      name: "more info",
      url: "https://www.bigissue.com/news/activism/further-stand-with-ukraine-protests-planned-in-london-as-invasion-continues/",
      image: "https://thebigissue581.wpengine.com/wp-content/uploads/2022/02/MicrosoftTeams-image-13-e1645802089918-1530x860.jpg"
    }],
    "images": [
      "https://thebigissue581.wpengine.com/wp-content/uploads/2022/02/MicrosoftTeams-image-13-e1645802089918-1530x860.jpg",
    ],
    "categories": ["war"]
  }
]

export default function useEventData(): IEvent[] {
  return DATA
}



