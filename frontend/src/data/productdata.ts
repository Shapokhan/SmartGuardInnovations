export interface ProductImage {
    id: number;
    alt: string;
    src: string;
}

export interface ProductPart {
    partNumber: string;
    description: string;
}

export interface ProductDimensions {
    mounting: string;
    width: string;
    height: string;
}

export interface Product {
    page: number;
    section: string;
    productType: string;
    productName: string;
    images: ProductImage[];
    description: string;
    features: string[];
    dimensions: ProductDimensions;
    parts: ProductPart[];
}

export const products: Product[] = [
    {
        page: 5,
        section: "Buttons",
        productType: "Momentary",
        productName: "Buttons Momentary",
        images: [
            { id: 1, alt: "Momentary Call Station PCB Front", src: "/images/buttons-momentary-1.png" },
            { id: 2, alt: "Momentary Call Station PCB Back", src: "/images/buttons-momentary-2.png" },
            { id: 3, alt: "Press For Nurse Momentary Wall Plate", src: "/images/buttons-momentary-3.png" }
        ],
        description: "The momentary call/cancel station provides independent call and cancel buttons. In addition to a pendant socket for a variety of patient call requirements, an air or other type of soft touch pendant may also be connected for special applications. The standard range is available in a variety of call button colours and membrane descriptions. The cancel button text background is always grey. Modules are assembled on a one gang plastic plate (complete with blank surround) for wall mounting. A call can be made by pressing the button; the call station or pendant connected to the station. When a call is made, a red reassurance LED below the call button illuminates. This provides local indication that the system has received the call and guides the attending staff to the call location. Pressing the cancel button will reset the call and extinguish the LED. This call station may be used in areas such as patient rooms and other areas where a call cancellation is required. The call station is available with screw terminals or RJ45 connectors.",
        features: [
            "Independent call and cancel buttons",
            "6.5mm passive socket for a pendant (optional)",
            "Input audible indication (optional)",
            "Integrated LED reassurance indicator",
            "Robust construction with high reliability",
            "Assembly supplied on standard wall plate or service duct",
            "Easy to press button, easily activated from almost any angle"
        ],
        dimensions: {
            mounting: "On plastic plate",
            width: "76mm",
            height: "116mm"
        },
        parts: [
            { partNumber: "701-1341", description: "Call Station Green Dry Area Momentary RJ Call with Socket" },
            { partNumber: "701-1351", description: "Call Station Green Dry Area Momentary RJ PFN with Socket" },
            { partNumber: "701-1231", description: "Call Station Yellow Dry Area Momentary RJ Assist with Socket" },
            { partNumber: "701-0231", description: "Call Station Yellow Dry Area Momentary RJ Assist" },
            { partNumber: "701-0111", description: "Call Station Red Dry Area Momentary RJ Emergency" },
            { partNumber: "701-1352", description: "Call Station Green Dry Area Momentary Term Call with Socket" },
            { partNumber: "701-1342", description: "Call Station Green Dry Area Momentary Term Call" },
            { partNumber: "701-1232", description: "Call Station Yellow Dry Area Momentary Term Assist with Socket" },
            { partNumber: "701-0112", description: "Call Station Red Dry Area Momentary Term Emergency" }
        ]
    },
    {
        page: 6,
        section: "Buttons",
        productType: "Latching",
        productName: "Buttons Latching",
        images: [
            { id: 1, alt: "Latching Call Station PCB Front", src: "/images/buttons-latching-1.png" },
            { id: 2, alt: "Latching Call Station PCB Back", src: "/images/buttons-latching-2.png" },
            { id: 3, alt: "Press For Nurse Latching Wall Plate", src: "/images/buttons-latching-3.png" }
        ],
        description: "The latching call station provides independent call and cancel buttons. When the call button is pressed, the call latches and remains active until it is cancelled by pressing the cancel button. A red reassurance LED below the call button illuminates when a call is registered, providing clear local indication to staff. The call station supports a 6.5mm pendant socket for a wide range of patient call devices, including pendants and pillow speakers. The standard range is available in a variety of call button colours and membrane descriptions. The cancel button text background is always grey. Modules are assembled on a one gang plastic plate with blank surround for wall mounting. The latching call station is suitable for areas where calls must remain active until deliberately cancelled. Units are available with RJ45 connectors or screw terminals.",
        features: [
            "Independent latching call and cancel buttons",
            "Call remains active until cancelled",
            "6.5mm passive socket for pendant or pillow speaker (optional)",
            "Input audible indication (optional)",
            "Integrated red LED reassurance indicator",
            "Robust construction with high reliability",
            "Supplied assembled on standard wall plate or service duct",
            "Easy to press buttons, operable from multiple angles"
        ],
        dimensions: {
            mounting: "On plastic plate",
            width: "76mm",
            height: "116mm"
        },
        parts: [
            { partNumber: "701-1346", description: "Call Station Green Dry Area Latching RJ Call with Socket" },
            { partNumber: "701-1356", description: "Call Station Green Dry Area Latching RJ PFN with Socket" },
            { partNumber: "701-1236", description: "Call Station Yellow Dry Area Latching RJ Assist with Socket" },
            { partNumber: "701-0236", description: "Call Station Yellow Dry Area Latching RJ Assist" },
            { partNumber: "701-0116", description: "Call Station Red Dry Area Latching RJ Emergency" },
            { partNumber: "701-1357", description: "Call Station Green Dry Area Latching Term Call with Socket" },
            { partNumber: "701-1347", description: "Call Station Green Dry Area Latching Term Call" },
            { partNumber: "701-1237", description: "Call Station Yellow Dry Area Latching Term Assist with Socket" },
            { partNumber: "701-0117", description: "Call Station Red Dry Area Latching Term Emergency" }
        ]
    }

{
    page: 7,
    section: "Buttons",
    productType: "Intelligent",
    productName: "Buttons Intelligent – Starsmart/StarsmartVE",
    images: [
        { id: 1, alt: "Starsmart Call Station Front", src: "/images/buttons-intelligent-1.png" },
        { id: 2, alt: "Starsmart Call Station Back", src: "/images/buttons-intelligent-2.png" },
        { id: 3, alt: "StarsmartVE Wall Plate with Pendant", src: "/images/buttons-intelligent-3.png" }
    ],
    description: "The Starsmart and StarsmartVE multi-function station provides independent call, assist, and cancel buttons, in addition to 3 auxiliary sockets for a variety of patient/resident requirements. The ability to connect a pendant, bed mat, floor mat, beam, or bed wet sensor is readily available within this compact call station. Modules are assembled on a one gang plastic plate for wall mounting. A red reassurance LED illuminates when a call is made, guiding staff to the call location. Pressing the cancel button will reset the call and extinguish the LED. This call station is suitable for patient rooms and other areas requiring a cancel function and is only available with RJ45 connectors.",
    features: [
        "Independent call, assist and cancel buttons",
        "3 qty 6.5mm auxiliary sockets (optional)",
        "StarsmartVE supports one intelligent handset jack",
        "Reading light relay output 12- or 24-volt DC",
        "Integrated LED reassurance light",
        "Robust construction for durability and reliability",
        "Fits any standard flat wall plate or service duct",
        "RTLS dual technology receivers (optional)"
    ],
    dimensions: {
        mounting: "On plastic plate",
        width: "76mm",
        height: "116mm"
    },
    parts: [
        { partNumber: "701-2349D", description: "Call Station Green Dry Area Starsmart Dual Call with Auxiliaries" },
        { partNumber: "701-1349D", description: "Call Station Green Dry Area Starsmart Dual Call with Pendant" },
        { partNumber: "701-0349D", description: "Call Station Green Dry Area Starsmart Dual Call no Auxiliaries" },
        { partNumber: "701-1359", description: "Call Station Green Dry Area Starsmart PFN with Pendant" },
        { partNumber: "701-8349DIR", description: "Call Station Green Dry Area Starsmart Dual Call with Auxiliaries (RTLS)" },
        { partNumber: "701-7349DIR", description: "Call Station Green Dry Area Starsmart Dual Call with Pendant (RTLS)" },
        { partNumber: "701-6349DIR", description: "Call Station Green Dry Area Starsmart Dual Call no Auxiliaries (RTLS)" },
        { partNumber: "701-9359DIR", description: "Call Station Green Dry Area StarsmartVE PFN with RJ45 Handset (RTLS)" }
    ]
},
  {
    page: 8,
    section: "Buttons",
    productType: "Intelligent",
    productName: "Buttons Intelligent – Netsmart PoE - GPON Ready",
    images: [
        { id: 1, alt: "Netsmart PoE Call Station Front", src: "/images/buttons-netsmart-poe-1.png" },
        { id: 2, alt: "Netsmart PoE Call Station Back", src: "/images/buttons-netsmart-poe-2.png" },
        { id: 3, alt: "Netsmart PoE Wall Plate with Pendant", src: "/images/buttons-netsmart-poe-3.png" }
    ],
    description: "The PoE (Power over Ethernet) multi-function station provides independent call, assist, and cancel buttons, in addition to 3 auxiliary sockets for a variety of patient/resident requirements. Modules are assembled on a one gang plastic plate for wall mounting. A red reassurance LED illuminates when a call is made, guiding staff to the call location. Pressing the cancel button will reset the call and extinguish the LED. This call station is only available with RJ45 connectors and may be used in patient rooms or other areas requiring a cancel function.",
    features: [
        "Independent call, assist and cancel buttons",
        "3 qty 6.5mm auxiliary sockets (optional)",
        "Reading light relay output 12-volt DC (Supplied by PoE)",
        "Integrated LED reassurance light",
        "Robust construction for durability and reliability",
        "Fits any standard flat wall plate or service duct",
        "Easy to press buttons, operable from multiple angles",
        "RTLS dual technology receivers",
        "PoE class 802.3AF/AT"
    ],
    dimensions: {
        mounting: "On plastic plate",
        width: "76mm",
        height: "116mm"
    },
    parts: [
        { partNumber: "712-8343DIR", description: "Call Station Green Dry Area Netsmart Dual Call with Auxiliaries" },
        { partNumber: "712-7343DIR", description: "Call Station Green Dry Area Netsmart Dual Call with Pendant" },
        { partNumber: "712-6343DIR", description: "Call Station Green Dry Area Netsmart Dual Call no Auxiliaries" },
        { partNumber: "712-6233IR", description: "Call Station Yellow Dry Area Netsmart Staff Assist" },
        { partNumber: "712-6113IR", description: "Call Station Red Dry Area Netsmart Emergency" },
        { partNumber: "712-66S3IR", description: "Call Station White Dry Area Netsmart Duress" },
        { partNumber: "705-0002", description: "LDD Led Display Driver PoE includes speaker for tones" },
        { partNumber: "703-0035", description: "NetSmart Check in server" }
    ]
  },
  {
    page: 9,
    section: "Buttons",
    productType: "Intelligent",
    productName: "Buttons Intelligent – Netsmart Slaves – Dry and Wet Area",
    images: [
        { id: 1, alt: "Netsmart LS Slave Dry Area Front", src: "/images/buttons-netsmart-slave-1.png" },
        { id: 2, alt: "Netsmart LS Slave Wet Area Front", src: "/images/buttons-netsmart-slave-2.png" },
        { id: 3, alt: "Netsmart LS Slave Wall Plate", src: "/images/buttons-netsmart-slave-3.png" }
    ],
    description: "The Netsmart LS slave dry area call/cancel station provides independent call and cancel buttons. Wet area units are fully epoxy sealed with a wall gasket for IP rated wet area use. Modules are assembled on a one gang plastic plate for wall mounting. A red reassurance LED illuminates when a call is made, guiding staff to the call location. Pressing the cancel button resets the call and extinguishes the LED. Suitable for patient rooms and other areas requiring a cancel function.",
    features: [
        "Independent call and cancel buttons, optional dual assist button available",
        "3 qty 6.5mm auxiliary sockets (optional)",
        "Reading light relay output 12-volt DC (Supplied by PoE Netsmart Master)",
        "Integrated LED reassurance light",
        "Robust construction for durability and reliability",
        "Fits any standard flat wall plate or service duct",
        "Easy to press buttons, operable from multiple angles",
        "RTLS dual technology receivers",
        "Hooded wet area unit available"
    ],
    dimensions: {
        mounting: "On plastic plate",
        width: "76mm",
        height: "116mm"
    },
    parts: [
        { partNumber: "712-6111IR", description: "Call Station Red Dry Area Netsmart Slave Emergency" },
        { partNumber: "712-6231IR", description: "Call Station Yellow Dry Area Netsmart Slave Staff Assist" },
        { partNumber: "712-7341IR", description: "Call Station Green Dry Area Netsmart Slave Call with Pendant" },
        { partNumber: "712-8341DIR", description: "Call Station Green Dry Area NS Slave Dual Call with Auxiliaries" },
        { partNumber: "712-6341DIR", description: "Call Station Green Dry Area NS Slave Dual Call no Auxiliaries" },
        { partNumber: "712-0342", description: "Call Station Green Wet Area Hooded Netsmart Slave Call" }
    ]
  },
  {
    page: 10,
    section: "Buttons",
    productType: "Intelligent",
    productName: "Buttons Intelligent – Netsmart Wi-Fi",
    images: [
        { id: 1, alt: "Netsmart Wi-Fi Call Station Front", src: "/images/buttons-netsmart-wifi-1.png" },
        { id: 2, alt: "Netsmart Wi-Fi Call Station Side", src: "/images/buttons-netsmart-wifi-2.png" },
        { id: 3, alt: "Netsmart Wi-Fi Wall Plate with Pendant", src: "/images/buttons-netsmart-wifi-3.png" }
    ],
    description: "The Wi-Fi Netsmart call station provides independent call, assist, and cancel buttons, optionally with 3 auxiliary sockets. Modules are assembled on a one gang plastic plate for wall mounting. A red reassurance LED illuminates when a call is made. Pressing the cancel button resets the call and extinguishes the LED. Suitable for patient rooms and other areas requiring a cancel function.",
    features: [
        "Independent call and cancel buttons, optional dual assist button available",
        "3 qty 6.5mm auxiliary sockets (optional)",
        "Reading light relay output 12-volt DC (low current pulse from battery)",
        "Integrated LED reassurance light",
        "Robust construction for durability and reliability",
        "Fits any standard flat wall plate or service duct",
        "Easy to press buttons, operable from multiple angles",
        "2.4GHz 802.11 b/g/n",
        "2 year battery life"
    ],
    dimensions: {
        mounting: "On plastic plate",
        width: "76mm",
        height: "116mm"
    },
    parts: [
        { partNumber: "711-0230", description: "Call Station Yellow Netsmart Wi-Fi Staff Assist" },
        { partNumber: "711-1340", description: "Call Station Green Netsmart Wi-Fi Call with Pendant" },
        { partNumber: "711-2340D", description: "Call Station Green Netsmart Wi-Fi Dual Call with Auxiliaries" },
        { partNumber: "711-0340D", description: "Call Station Green Netsmart Wi-Fi Dual Call no Auxiliaries" },
        { partNumber: "711-1340D", description: "Call Station Green Netsmart Wi-Fi Dual Call with Pendant" }
    ]
  },
  {
    page: 11,
    section: "Buttons",
    productType: "Wet Area",
    productName: "Buttons Wet Area – Latching and Momentary",
    images: [
        { id: 1, alt: "Wet Area Call Station Front", src: "/images/buttons-wet-1.png" },
        { id: 2, alt: "Wet Area Call Station Back", src: "/images/buttons-wet-2.png" },
        { id: 3, alt: "Wet Area Wall Plate", src: "/images/buttons-wet-3.png" }
    ],
    description: "The Hooded Wet Area Call/Cancel Station is designed for areas exposed to water, such as toilets or bathrooms. The call point is fitted with a sealing gasket to prevent water penetration. Both momentary and latching versions are available.",
    features: [
        "LED reassurance light",
        "Robust construction for durability and reliability",
        "All joints encapsulated",
        "Complies with AS3811",
        "Designed to meet IP66 requirements",
        "IP67 rated, waterproof",
        "Momentary and latching versions available"
    ],
    dimensions: {
        mounting: "On plastic plate",
        width: "76mm",
        height: "116mm"
    },
    parts: [
        { partNumber: "701-0123", description: "Call Station Red Wet Area Mechanical Latching PFA" },
        { partNumber: "701-0344", description: "Call Station Green Wet Area Momentary Call" },
        { partNumber: "701-0345", description: "Call Station Green Wet Area Latching Call" },
        { partNumber: "701-0354", description: "Call Station Green Wet Area Momentary PFN" },
        { partNumber: "701-0355", description: "Call Station Green Wet Area Latching PFN" },
        { partNumber: "701-0235", description: "Call Station Yellow Wet Area Latching Assist" },
        { partNumber: "701-0234", description: "Call Station Yellow Wet Area Momentary Assist" },
        { partNumber: "701-0115", description: "Call Station Red Wet Area Latching Emergency" },
        { partNumber: "701-0114", description: "Call Station Red Wet Area Momentary Emergency" }
    ]
  },
  {
    page: 12,
    section: "Buttons",
    productType: "Wireless",
    productName: "Buttons Wireless - SafAir",
    images: [
        { id: 1, alt: "SafAir Wireless Call Station Front", src: "/images/buttons-safair-1.png" },
        { id: 2, alt: "SafAir Wireless Call Station Side", src: "/images/buttons-safair-2.png" },
        { id: 3, alt: "SafAir Wireless Wall Plate", src: "/images/buttons-safair-3.png" }
    ],
    description: "The SafAir Wireless Call station is available in wet and dry area styles. It is suitable where cabling is not possible and can pair with Starsmart, Loopsmart, or Netsmart stations. Supports fault monitoring and comes with a lithium battery.",
    features: [
        "LED reassurance light",
        "Offline and low battery monitoring",
        "Robust construction",
        "Designed to meet IP66 requirements for wet areas",
        "Dry area version available",
        "2 year battery life"
    ],
    dimensions: {
        mounting: "On plastic plate",
        width: "76mm",
        height: "116mm"
    },
    parts: [
        { partNumber: "713-4346", description: "Call Station SafAir Green Dry Area Call with Socket" },
        { partNumber: "713-3346", description: "Call Station SafAir Green Dry Area Call" },
        { partNumber: "713-3236", description: "Call Station SafAir Yellow Dry Area Assist" },
        { partNumber: "713-3116", description: "Call Station SafAir Red Dry Area Emergency" },
        { partNumber: "713-3345", description: "Call Station SafAir Green Wet Area Call" },
        { partNumber: "713-3235", description: "Call Station SafAir Yellow Wet Area Assist" },
        { partNumber: "713-3115", description: "Call Station SafAir Red Wet Area Emergency" },
        { partNumber: "102-0001", description: "Replacement Battery for SafAir Wireless Stations" }
    ]
  },
  {
    page: 13,
    section: "Duress & Panic",
    productType: "Duress Panic Strip",
    productName: "Duress Panic Strip Wall Mount or Under bench",
    images: [
        { id: 1, alt: "Duress Panic Strip Front", src: "/images/duress-panic-1.png" },
        { id: 2, alt: "Duress Panic Strip Side", src: "/images/duress-panic-2.png" },
        { id: 3, alt: "Duress Panic Strip Installation", src: "/images/duress-panic-3.png" }
    ],
    description: "The Safe Co Duress Panic Strip is supplied in lengths of 1524mm and can be cut to suit installation requirements. It can be interfaced to any alarm or security system via momentary contact closure.",
    features: [
        "Sleek modern design",
        "Compatible with existing alarm systems",
        "Suitable for hospital use",
        "Suitable for high risk areas"
    ],
    dimensions: {
        mounting: "Wall mount or under bench",
        length: "1524mm",
        width: "40mm",
        height: "20mm"
    },
    parts: [
        { partNumber: "601-0500", description: "1524mm Panic Rail Base" },
        { partNumber: "508-0501", description: "Panic Strip insert per metre" },
        { partNumber: "508-0502", description: "End Caps pair" },
        { partNumber: "111-0503", description: "Connector set" },
        { partNumber: "Custom", description: "For Strip with built in LED strip back light contact Safe Co" }
    ]
  },
  {
    page: 14,
    section: "Sensor Mats",
    productType: "Floor/Bed/Chair",
    productName: "Sensor Mats – Floor – Bed - Chair",
    images: [
        { id: 1, alt: "Floor Sensor Mat", src: "/images/sensor-mats-1.png" },
        { id: 2, alt: "Bed Sensor Mat", src: "/images/sensor-mats-2.png" },
        { id: 3, alt: "Chair Sensor Mat", src: "/images/sensor-mats-3.png" }
    ],
    description: "Safe Co offers sensor mats for areas where fall risks or wandering residents may be present. Mats connect to Safe Co call stations and other systems. Floor mats detect stepping, bed mats detect getting out of bed, chair mats detect getting out of chair.",
    features: [
        "Robust material",
        "Compatible with existing nurse call systems",
        "Suitable for aged care use",
        "Suitable for hospital use"
    ],
    parts: [
        { partNumber: "709-0001", description: "Safe Co Floor Sensor Mat" },
        { partNumber: "709-0002", description: "Safe Co Bed Sensor Mat" },
        { partNumber: "709-0003", description: "Safe Co Chair Sensor Mat" },
        { partNumber: "Contact", description: "Contact Safe Co for foldable or wireless mats" }
    ]
  },
  {
    page: 15,
    section: "Dome Lights",
    productType: "7 Colour Switched & iDementia",
    productName: "Dome Lights – 7 Colour Switched and iDementia",
    images: [
        { id: 1, alt: "Dome Light 7 Colour", src: "/images/dome-light-1.png" },
        { id: 2, alt: "iDementia Dome Light", src: "/images/dome-light-2.png" },
        { id: 3, alt: "Dome Light Installation", src: "/images/dome-light-3.png" }
    ],
    description: "The Unicall series 7 colour dome light has up to 4 segments, each selectable with 7 LED colours via switch settings. iDementia dome lights support up to 3 segments with intelligent input/output processing for dementia care areas. Connection is via screw terminal or RJ45 sockets.",
    features: [
        "High luminosity",
        "RJ45 sockets allow daisy chaining",
        "Screw terminal for easy activation",
        "Up to 4 outputs available",
        "Structured CAT5e integration",
        "Output line selection via installer"
    ],
    dimensions: {
        width: "76mm",
        height: "116mm"
    },
    parts: [
        { partNumber: "702-2701", description: "Dome Light 7 Colour Standard" },
        { partNumber: "702-2712", description: "Dome Light 7 Colour with Buzzer Engraved Universal Assistance" },
        { partNumber: "702-2721", description: "Dome Light 7 Colour Engraved X-Ray In Use" },
        { partNumber: "702-3301", description: "Dome Light Red/White/Amber iDementia" }
    ]
  },
  {
    page: 16,
    section: "Dome Lights",
    productType: "NetSmart RGB",
    productName: "Dome Lights – NetSmart RGB",
    images: [
        { id: 1, alt: "Netsmart RGB Dome Light Front", src: "/images/dome-netsmart-1.png" },
        { id: 2, alt: "Netsmart RGB Dome Light Side", src: "/images/dome-netsmart-2.png" },
        { id: 3, alt: "Netsmart RGB Dome Light Installation", src: "/images/dome-netsmart-3.png" }
    ],
    description: "The Netsmart RGB dome light has 1, 2, or 3 segments. Sixteen LED colours are available. Each segment stacks calls of different priorities; the highest priority call color is shown, with multiple same-priority calls scrolling every 3 seconds. Includes intelligent input/output processing for dementia care areas.",
    features: [
        "High Luminosity",
        "RJ45 sockets allow daisy chaining",
        "Structured CAT5e integration with Netsmart PoE Master",
        "Advanced alarm display methods",
        "Highly flexible programmable options",
        "Each segment acts independently as a multi-colour display channel"
    ],
    dimensions: {
        width: "76mm",
        height: "116mm"
    },
    parts: [
        { partNumber: "702-5000", description: "Dome Light Netsmart RGB" }
    ]
  },
  {
    page: 17,
    section: "RTLS",
    productType: "Beacon",
    productName: "RTLS Beacon",
    images: [
        { id: 1, alt: "RTLS Ceiling Mount Beacon", src: "/images/rtls-beacon-1.png" },
        { id: 2, alt: "RTLS Beacon Top View", src: "/images/rtls-beacon-2.png" },
        { id: 3, alt: "RTLS Beacon Installation", src: "/images/rtls-beacon-3.png" }
    ],
    description: "The Unicall RTLS Beacon is ceiling mounted for room location accuracy in duress or asset tracking. Dual technology RF and IR receivers maximize tracking accuracy. Wireless pendants can pair directly for wandering patient tracking or site-wide locating.",
    features: [
        "High Luminosity",
        "RJ45 sockets for daisy chaining",
        "8 programmable RF call point inputs",
        "4 programmable outputs",
        "Structured CAT5e integration",
        "Piezo sounder",
        "4 super bright blue LEDs visible from all angles"
    ],
    dimensions: {
        diameter: "100mm",
        depth: "15mm"
    },
    parts: [
        { partNumber: "703-0070", description: "RTLS Ceiling mount Beacon" }
    ]
  },
  {
    page: 18,
    section: "Pendants",
    productType: "Silicon Pendant",
    productName: "Pendants",
    images: [
        { id: 1, alt: "Blue Single Button Pendant", src: "/images/pendant-1.png" },
        { id: 2, alt: "Blue Dual Button Pendant", src: "/images/pendant-2.png" },
        { id: 3, alt: "Grey Dual Button Pendant", src: "/images/pendant-3.png" }
    ],
    description: "The Safe Co Silicon Pendant is robust and hygienic, available in single or dual button versions. Buttons include Braille for nurse call and light switch. Ergonomic and dip sterilisable, constructed from anti-bacterial materials.",
    features: [
        "Ergonomic design for left/right hand",
        "Bed clip for storage",
        "Dip sterilisable",
        "Anti-bacterial materials",
        "Easy to operate",
        "Non-slip surface",
        "Maintenance free"
    ],
    parts: [
        { partNumber: "708-0022", description: "Silicon Pendant Blue Single Button 2.5 Metre Lead 6.35mm Jack" },
        { partNumber: "708-0021", description: "Silicon Pendant Blue Dual Button 2.5 Metre Lead 6.35mm Jack" },
        { partNumber: "708-0011", description: "Silicon Pendant Grey Dual Button 2.5 Metre Lead 6.35mm Jack" }
    ]
  },
  {
    page: 19,
    section: "Handset",
    productType: "Entertainment Handset",
    productName: "Handset Entertainment",
    images: [
        { id: 1, alt: "Entertainment Handset Standard", src: "/images/handset-1.png" },
        { id: 2, alt: "Entertainment Handset Smart TV", src: "/images/handset-2.png" },
        { id: 3, alt: "Entertainment Socket Intelligent", src: "/images/handset-3.png" }
    ],
    description: "The Safe Co entertainment handset allows patient control of nurse call, light switch, and in-built torch. Compatible with modern TV systems. Includes speaker, earphone socket, backlit buttons, and secure cradle.",
    features: [
        "Ergonomic handset housing",
        "Robust construction",
        "Custom cradle for storage",
        "2.5M cable with 18 pin plug",
        "Waterproof speaker",
        "Earphone socket",
        "Nurse call button",
        "Reading light and torch button"
    ],
    parts: [
        { partNumber: "708-9600", description: "Entertainment Handset Standard 18 pin 2.5M Lead" },
        { partNumber: "708-9601", description: "Entertainment Handset Smart TV 18 pin 2.5M Lead" },
        { partNumber: "701-9001", description: "Entertainment Socket Standard Intelligent with Cancel 18 pin" },
        { partNumber: "701-9003", description: "Entertainment Socket Legacy with Cancel 18 pin" },
        { partNumber: "708-9602", description: "Entertainment Handset Intelligent with RJ45 Curly Cord" }
    ]
  },
  {
    page: 20,
    section: "Annunciators",
    productType: "LED / Monitor",
    productName: "Annunciators",
    images: [
        { id: 1, alt: "Annunciator LED Dot Matrix", src: "/images/annunciator-1.png" },
        { id: 2, alt: "Annunciator Monitor", src: "/images/annunciator-2.png" },
        { id: 3, alt: "Annunciator Installation", src: "/images/annunciator-3.png" }
    ],
    description: "Safe Co Annunciators are available as LED 13 character dot matrix or 24”-65” monitors. Displays highest priority calls, alternating multiple same-priority calls every 2 seconds. Colors indicate call type.",
    features: [
        "Visible from up to 30 metres",
        "Robust construction",
        "Displays time when no active calls",
        "White housing"
    ],
    parts: [
        { partNumber: "704-0001", description: "Annunciator Tri Colour LED Dot Matrix 13 Character" },
        { partNumber: "705-0001", description: "Universal Zone Controller with Tone Generator" },
        { partNumber: "705-0002", description: "NetSmart LDD Led Display Driver PoE includes speaker for tones" }
    ]
  },[
  {
    page: 21,
    section: "Controllers",
    productType: "Unicall NIO",
    productName: "Controllers – Unicall NIO",
    images: [
        { id: 1, alt: "Unicall NIO Controller Front", src: "/images/unicall-nio-1.png" },
        { id: 2, alt: "Unicall NIO Controller Side", src: "/images/unicall-nio-2.png" },
        { id: 3, alt: "Unicall NIO Controller Rack Mounted", src: "/images/unicall-nio-3.png" }
    ],
    description: "Safe Co Unicall system provides a robust IP Hybrid dual network Nurse call solution. Networking between controllers can be via Unicall network, TCP/IP, or both, ensuring complete redundancy and continuous notification of active alarms.",
    features: [
        "Redundant networks",
        "TCP/IP network",
        "AS3811 compliant",
        "Secure communications",
        "Intersite system networking",
        "Backwards compatible with legacy nurse call systems",
        "Rack and wall mountable",
        "Short circuit protection",
        "Built-in HLI high level interface",
        "Web page reporting and monitoring over Ethernet"
    ],
    dimensions: {
        rackUnit: "1RU",
        width: "19 inches"
    },
    parts: [
        { partNumber: "703-0001", description: "Controller Unicall Standard" },
        { partNumber: "703-0006", description: "Controller Unicall With Ethernet" }
    ]
  },
  {
    page: 22,
    section: "Pagers",
    productType: "Waterproof / Legacy",
    productName: "Pagers",
    images: [
        { id: 1, alt: "Waterproof Pager", src: "/images/pager-1.png" },
        { id: 2, alt: "Legacy Pager", src: "/images/pager-2.png" },
        { id: 3, alt: "Pager Charging Station", src: "/images/pager-3.png" }
    ],
    description: "Safe Co waterproof pager combines POCSAG technology with modern design. Smaller, lighter, sealed, rechargeable, and compatible with single, 5-way, or 10-way charging stations. Typical battery life 5 days.",
    features: [
        "Sleek modern design",
        "Rechargeable, no battery replacement needed",
        "Belt clip supplied",
        "Compatible with existing paging systems",
        "Hand programmable",
        "Up to 8 paging addresses (capcodes)",
        "Battery charge indicator",
        "8 melody alerts",
        "Built-in vibrator for alert",
        "Multi-language support"
    ],
    dimensions: {
        width: "54mm",
        height: "90mm",
        depth: "8.6mm"
    },
    parts: [
        { partNumber: "708-1000", description: "Pager Waterproof Rechargeable VHF" },
        { partNumber: "708-1001", description: "Pager Waterproof Rechargeable UHF" },
        { partNumber: "708-1010", description: "Legacy Pager Black VHF" },
        { partNumber: "708-1011", description: "Legacy Pager Black UHF" },
        { partNumber: "706-1000", description: "Single Charging Station for Waterproof Pager" },
        { partNumber: "706-1005", description: "Multidock 5-way Charging Station" },
        { partNumber: "706-1010", description: "Multidock 10-way Charging Station" }
    ]
  },
  {
    page: 23,
    section: "Mobile Apps",
    productType: "QP Messenger",
    productName: "Mobile Apps – QP Messenger",
    images: [
        { id: 1, alt: "QP Messenger Android", src: "/images/qp-android.png" },
        { id: 2, alt: "QP Messenger iOS", src: "/images/qp-ios.png" },
        { id: 3, alt: "QP Messenger Notification", src: "/images/qp-notification.png" }
    ],
    description: "QP Messenger app is available on Android and Apple platforms. Works via Wi-Fi to connect to Quickpass server for live event notifications. Users can assign zones/wards and call back rooms where calls were raised. Can use mobile network or SIP endpoint.",
    features: [
        "Available for Android and Apple devices",
        "Wi-Fi connectivity to Quickpass server",
        "Live event notification",
        "Zone/ward assignment",
        "Call back functionality",
        "SIP endpoint support"
    ],
    parts: [
        { partNumber: "801-3000", description: "QP Messenger App suit Android" },
        { partNumber: "801-3001", description: "QP Messenger App suit Apple" }
    ]
  },
  {
    page: 24,
    section: "RTLS",
    productType: "Real Time Locating Systems",
    productName: "Real Time Locating Systems (RTLS)",
    images: [
        { id: 1, alt: "Quad Tech RTLS Emergency Tag", src: "/images/rtls-tag-1.png" },
        { id: 2, alt: "RTLS Charging Station", src: "/images/rtls-charging-2.png" },
        { id: 3, alt: "RTLS in Use", src: "/images/rtls-use-3.png" }
    ],
    description: "Safe Co RTLS solutions include positional duress, staff, patient, and asset tracking. Uses quad Wi-Fi, BLE, RF, and IR technology for area-to-room accuracy. Integrates with wireless messaging and graphical displays to reduce Total Cost of Ownership in healthcare facilities.",
    features: [
        "Positional tracking for duress, staff, patient, and assets",
        "Area to room scalable accuracy",
        "Quad Wi-Fi, BLE, RF, IR technology",
        "Integration with nurse call stations",
        "Graphical display support",
        "Reduces total cost of ownership"
    ],
    parts: [
        { partNumber: "708-3000", description: "Quad Tech RTLS Emergency Tag" },
        { partNumber: "706-1022", description: "Charging Station suit RTLS Tag 20-way" }
    ]
  },
  {
    page: 25,
    section: "Dementia Care",
    productType: "Keypad / Sensor",
    productName: "Dementia Care",
    images: [
        { id: 1, alt: "Dementia Arming Keypad", src: "/images/dementia-keypad-1.png" },
        { id: 2, alt: "Curtain Motion Sensor", src: "/images/dementia-sensor-2.png" },
        { id: 3, alt: "Wide Motion Sensor", src: "/images/dementia-sensor-3.png" }
    ],
    description: "Dementia care units provide automation and unobtrusive monitoring within a room. Supports reed switches, motion sensors, bed mats, and floor mats. Enables staff to arm/disarm the system and monitor resident activity, including wandering alerts.",
    features: [
        "4 predefined profiles",
        "Arm/disarm from keypad",
        "Alarm status indicators",
        "Auxiliary outputs for lights",
        "Supports reed switches and motion sensors",
        "Two-press arming to prevent tampering"
    ],
    dimensions: {
        width: "76mm",
        height: "116mm"
    },
    parts: [
        { partNumber: "703-0009", description: "Keypad Dementia Arming Station" },
        { partNumber: "707-0003", description: "Curtain Motion Sensor (entry door)" },
        { partNumber: "707-0004", description: "Wide Motion Sensor" },
        { partNumber: "703-0105", description: "Key switch Arming Station" }
    ]
  },
  {
    page: 26,
    section: "Software & Integration",
    productType: "Quickpass Messenger",
    productName: "Software and Integration – Quickpass Messenger",
    images: [
        { id: 1, alt: "Quickpass Software Dashboard", src: "/images/quickpass-1.png" },
        { id: 2, alt: "Quickpass Reporting Screen", src: "/images/quickpass-2.png" },
        { id: 3, alt: "Quickpass Integration Overview", src: "/images/quickpass-3.png" }
    ],
    description: "Quickpass logging and paging system provides SQL database logging, site linking, exportable/customisable data, and integration with various alarm and nurse call systems. Supports advertising on monitors and multi-site comparison.",
    features: [
        "SQL Database logging",
        "Customisable export and extraction",
        "Supports multiple sites",
        "Integration with BMS, nurse call, fire alarms, and generic 3rd party systems",
        "Client-specific advertising support"
    ],
    parts: []
  }








