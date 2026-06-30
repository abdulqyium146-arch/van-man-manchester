export interface Location {
  slug: string;
  name: string;
  postcode: string;
  county: string;
  area: string;
  intro: string;
  description: string;
  landmarks: string[];
  roads: string[];
  schools: string[];
  shopping: string[];
  stations: string[];
  nearbyAreas: string[];
  distanceToCity: string;
  lat: number;
  lng: number;
}

export const locations: Location[] = [
  {
    slug: "radcliffe",
    name: "Radcliffe",
    postcode: "M26",
    county: "Greater Manchester",
    area: "Bury",
    lat: 53.5631,
    lng: -2.3228,
    intro:
      "Radcliffe sits between Bury and Bolton in the heart of Greater Manchester. Whether you're moving into one of the new-build estates off Ainsworth Road or leaving a Victorian terrace near the town centre, our man and van team knows the area inside out.",
    description:
      "Our Radcliffe removal service covers every street in the M26 postcode. From Spring Lane to Stand Lane, from Coronation Road to the Radcliffe precinct — we handle moves of every size with care and speed.",
    landmarks: ["Radcliffe Metrolink Station", "Radcliffe Core", "Stand Country Park", "Bury town centre (2 miles)", "Radcliffe Riverside"],
    roads: ["A665 (Bury Road)", "A56 (Warrington Road)", "A58 (Manchester Road)", "Ainsworth Road", "Spring Lane"],
    schools: ["Radcliffe Riverside School", "St Mary's RC Primary", "St Thomas' CE Primary", "New Bury Primary"],
    shopping: ["Radcliffe precinct", "Bury Market (nearby)", "The Rock Bury"],
    stations: ["Radcliffe Metrolink (Bury–Manchester line)"],
    nearbyAreas: ["Bury", "Whitefield", "Farnworth", "Little Lever", "Bolton"],
    distanceToCity: "7 miles from Manchester city centre",
  },
  {
    slug: "heywood",
    name: "Heywood",
    postcode: "OL10",
    county: "Greater Manchester",
    area: "Rochdale",
    lat: 53.5921,
    lng: -2.2243,
    intro:
      "Heywood is a thriving market town in the borough of Rochdale, close to the M62 and surrounded by the communities of Middleton, Bury and Rochdale. If you're planning a move in or around OL10, our team is ready.",
    description:
      "We cover all of Heywood including Birch, Hopwood, Heap Bridge, Bamford and the town centre. Our removal vans are familiar with every road off Junction 19 of the M62, making your Heywood house move smooth and stress-free.",
    landmarks: ["Heywood Distribution Park", "Queen's Park", "Junction 19 (M62)", "Heywood Sports Village", "Birch Services"],
    roads: ["M62 (Junction 19)", "A58 (Bury Road)", "A6046 (Rochdale Road)", "Pilsworth Road", "Bamford Road"],
    schools: ["Hopwood Hall College", "Holy Family RC Primary", "Heywood Community School", "Peel Brow Primary"],
    shopping: ["Heywood town centre", "Middleton Arndale (nearby)", "Rochdale town centre"],
    stations: ["Rochdale (rail)", "Bury (Metrolink)"],
    nearbyAreas: ["Rochdale", "Middleton", "Bury", "Radcliffe", "Castleton"],
    distanceToCity: "10 miles from Manchester city centre",
  },
  {
    slug: "atherton",
    name: "Atherton",
    postcode: "M46",
    county: "Greater Manchester",
    area: "Wigan",
    lat: 53.5232,
    lng: -2.4940,
    intro:
      "Atherton is a former mining town in the borough of Wigan, known for its friendly community and affordable housing. If you're moving to or from M46, our man and van team offers fast, friendly removals.",
    description:
      "We cover Atherton town centre, Hindsford, Howe Bridge and Chowbent. Whether you're moving to one of the new estates near Leigh Road or leaving a semi-detached on Tyldesley Road, we handle every move with care.",
    landmarks: ["Atherton town centre", "Howe Bridge", "Lilford Park", "Chanters Sports College", "Atherton railway station"],
    roads: ["A579 (Leigh Road)", "A572 (Newton Road)", "Bolton Road", "Tyldesley Road", "Mealhouse Lane"],
    schools: ["Chanters Sports College", "St Richard's RC Primary", "Bedford High School (nearby)", "Westleigh Leisure Centre"],
    shopping: ["Atherton town centre", "Leigh town centre (2 miles)", "Wigan town centre"],
    stations: ["Atherton (Wigan–Manchester line)"],
    nearbyAreas: ["Leigh", "Tyldesley", "Westhoughton", "Hindley", "Wigan"],
    distanceToCity: "12 miles from Manchester city centre",
  },
  {
    slug: "horwich",
    name: "Horwich",
    postcode: "BL6",
    county: "Greater Manchester",
    area: "Bolton",
    lat: 53.5955,
    lng: -2.5406,
    intro:
      "Horwich is a large town at the foot of the West Pennine Moors, home to Reebok Stadium and thriving new-build developments. Our man and van team covers BL6 fully, from Rivington to Lostock.",
    description:
      "We service all areas of Horwich including the town centre, Rivington, Lostock, Horwich Parkway and the Rivington Pike area. We're experienced with the busy new-builds near the motorway and the older stone terraces near the moors.",
    landmarks: ["University of Bolton Stadium (Reebok)", "Rivington Pike", "Horwich Parkway Station", "MBNA Technology Park", "West Pennine Moors"],
    roads: ["M61 (Junctions 6–8)", "A673 (Chorley New Road)", "A6027 (Scholes Bank)", "Lever Park Avenue", "Lostock Junction Lane"],
    schools: ["Rivington and Blackrod High School", "St Mary's RC Primary", "Samuel Crompton Academy (nearby)"],
    shopping: ["Horwich town centre", "Middlebrook Retail Park", "Bolton town centre"],
    stations: ["Horwich Parkway (Manchester–Preston line)"],
    nearbyAreas: ["Bolton", "Westhoughton", "Adlington", "Blackrod", "Chorley"],
    distanceToCity: "12 miles from Manchester city centre",
  },
  {
    slug: "failsworth",
    name: "Failsworth",
    postcode: "OL9",
    county: "Greater Manchester",
    area: "Oldham",
    lat: 53.5108,
    lng: -2.1586,
    intro:
      "Failsworth is a residential town connecting Oldham and Manchester along the A62. With Metrolink access and great transport links, it's a popular choice for commuters — and a busy area for house moves.",
    description:
      "Our removal service covers all of Failsworth including Woodhouses, Limeside, Moston and the Hollinwood area. We navigate the A62 corridor daily and know every short cut for stress-free moves in OL9.",
    landmarks: ["Failsworth Metrolink Stop", "Failsworth Pole", "Daisy Nook Country Park", "Hollinwood tram stop", "Oldham town centre (2 miles)"],
    roads: ["A62 (Oldham Road)", "A6048 (Ashton Road West)", "Broadway", "Brierley Avenue", "Chadderton Way"],
    schools: ["Failsworth School", "St Mary's RC Primary", "Holy Trinity CE Primary", "Alt Bridge School"],
    shopping: ["Failsworth Precinct", "Oldham town centre", "Arndale Manchester"],
    stations: ["Failsworth (Metrolink Oldham line)"],
    nearbyAreas: ["Oldham", "Chadderton", "Moston", "Newton Heath", "Droylsden"],
    distanceToCity: "5 miles from Manchester city centre",
  },
  {
    slug: "middleton",
    name: "Middleton",
    postcode: "M24",
    county: "Greater Manchester",
    area: "Rochdale",
    lat: 53.5547,
    lng: -2.1972,
    intro:
      "Middleton is one of Greater Manchester's most well-connected towns, with easy access to the M60, Metrolink and Rochdale town centre. Our man and van team covers every corner of M24.",
    description:
      "We cover Middleton town centre, Mills Hill, Alkrington, Boarshaw, Langley and Middleton Junction. Whether it's a flat above the Arndale or a detached house in Alkrington Garden Village, we move everything safely.",
    landmarks: ["Middleton Arndale", "Alkrington Hall", "Mills Hill Station", "Lathom Park", "Jumbles Country Park (nearby)"],
    roads: ["A576 (Middleton Road)", "A664 (Rochdale Road)", "M60 (Junction 19)", "Long Street", "Manchester New Road"],
    schools: ["Cardinal Langley RC High School", "Middleton Technology School", "St Peter's RC Primary", "Holyrood RC School"],
    shopping: ["Middleton Arndale", "Rochdale town centre", "Manchester Arndale (nearby)"],
    stations: ["Mills Hill (Manchester Victoria line)", "Rochdale (Metrolink)"],
    nearbyAreas: ["Rochdale", "Heywood", "Moston", "Failsworth", "Oldham"],
    distanceToCity: "6 miles from Manchester city centre",
  },
  {
    slug: "walkden",
    name: "Walkden",
    postcode: "M28",
    county: "Greater Manchester",
    area: "Salford",
    lat: 53.5238,
    lng: -2.3954,
    intro:
      "Walkden is a large suburb of Salford with a busy town centre, excellent schools and great motorway access via the M60 and M61. Our man and van service is fully experienced across all of M28.",
    description:
      "We cover Walkden town centre, Boothstown, Worsley Mesnes, Swinton (nearby) and Salford. Our team regularly moves families between the new-build estates near the Ellesmere Shopping Centre and properties closer to the East Lancashire Road.",
    landmarks: ["Ellesmere Shopping Centre", "Worsley Packet House", "Bridgewater Canal", "Walkden Shopping Centre", "Salford City boundary"],
    roads: ["A575 (Worsley Road)", "A572 (Bolton Road)", "East Lancashire Road (A57)", "M60 Junction 13", "M61 Junction 2"],
    schools: ["Walkden High School", "Ellenbrook Community Primary", "St Paul's CE Primary", "Harrop Fold School"],
    shopping: ["Ellesmere Shopping Centre", "Walkden town centre", "The Trafford Centre (nearby)"],
    stations: ["Walkden (Manchester Victoria line)"],
    nearbyAreas: ["Worsley", "Swinton", "Eccles", "Bolton", "Farnworth"],
    distanceToCity: "8 miles from Manchester city centre",
  },
  {
    slug: "leigh",
    name: "Leigh",
    postcode: "WN7",
    county: "Greater Manchester",
    area: "Wigan",
    lat: 53.4984,
    lng: -2.5185,
    intro:
      "Leigh is a large market town in the borough of Wigan, known for Leigh Harriers rugby league and excellent bus connections across Greater Manchester. Our removal service covers all of WN7.",
    description:
      "We cover Leigh town centre, Westleigh, Pennington, Plank Lane, Bedford, Leigh East and the surrounding villages. Our removal vans operate daily across Leigh and the A579 corridor between Wigan and Manchester.",
    landmarks: ["Leigh town centre", "Pennington Flash", "Leigh Sports Village", "Westleigh Leisure Centre", "Lilford Park"],
    roads: ["A579 (Atherleigh Way)", "A572 (Manchester Road)", "A578 (Liverpool Road)", "Atherleigh Way Bypass", "Spinning Jenny Way"],
    schools: ["Westleigh High School", "Leigh CE Junior School", "Lowton High School", "Bedford High School"],
    shopping: ["Leigh Spinning Jenny (Shopping Centre)", "Leigh Market", "Wigan town centre"],
    stations: ["Leigh (Bus Rapid Transit to Manchester)"],
    nearbyAreas: ["Atherton", "Tyldesley", "Wigan", "Golborne", "Newton-le-Willows"],
    distanceToCity: "13 miles from Manchester city centre",
  },
  {
    slug: "chadderton",
    name: "Chadderton",
    postcode: "OL9",
    county: "Greater Manchester",
    area: "Oldham",
    lat: 53.5308,
    lng: -2.1543,
    intro:
      "Chadderton is one of Oldham's most popular residential areas, bordering Failsworth, Royton and the M60. Our man and van service runs throughout OL9 every day of the week.",
    description:
      "We cover Chadderton town centre, Foxdenton, Coalshaw Green, Alt and Chadderton Fold. The team regularly navigates the Broadway and Chadderton Way and are experienced with both terrace moves and larger family homes.",
    landmarks: ["Chadderton Hall Park", "Foxdenton Lane", "M60 (Junction 21)", "Chadderton Precinct", "Middleton (border)"],
    roads: ["A663 (Broadway)", "A6048 (Chadderton Way)", "M60 (Junction 21)", "Foxdenton Lane", "Higginshaw Road"],
    schools: ["Chadderton Hall School", "St Herbert's RC Primary", "Clarksfield Primary", "Blessed John Henry Newman RC College"],
    shopping: ["Chadderton Precinct", "Oldham town centre", "Middleton Arndale"],
    stations: ["Oldham Metrolink (nearby)"],
    nearbyAreas: ["Oldham", "Failsworth", "Middleton", "Royton", "Hollinwood"],
    distanceToCity: "6 miles from Manchester city centre",
  },
  {
    slug: "whitefield",
    name: "Whitefield",
    postcode: "M45",
    county: "Greater Manchester",
    area: "Bury",
    lat: 53.5520,
    lng: -2.2989,
    intro:
      "Whitefield is a popular commuter suburb of Bury, with fast Metrolink access to Manchester and a mix of 1930s semis and modern new-builds. Our man and van team covers all of M45.",
    description:
      "We cover Whitefield town centre, Besses o' th' Barn, Hillock and the Simister Lane area. Our team knows M45 inside out and regularly handles moves between Whitefield and central Manchester along the A56.",
    landmarks: ["Whitefield Metrolink", "Besses o' th' Barn Metrolink", "Stand Golf Club", "Heaton Park (nearby)", "Whitefield town centre"],
    roads: ["A56 (Bury New Road)", "A665 (Radcliffe New Road)", "Bury Old Road", "Simister Lane", "Higher Lane"],
    schools: ["Whitefield Community Primary", "Besses o' th' Barn Primary", "Parrenthorn High School", "Stand Grammar School"],
    shopping: ["Whitefield local centre", "Bury Market", "The Rock Bury"],
    stations: ["Whitefield Metrolink", "Besses o' th' Barn Metrolink"],
    nearbyAreas: ["Bury", "Radcliffe", "Prestwich", "Unsworth", "Heaton Park"],
    distanceToCity: "5 miles from Manchester city centre",
  },
  {
    slug: "royton",
    name: "Royton",
    postcode: "OL2",
    county: "Greater Manchester",
    area: "Oldham",
    lat: 53.5656,
    lng: -2.1222,
    intro:
      "Royton is a town in the borough of Oldham, nestled between Shaw, Chadderton and Oldham town centre. Our man and van service covers OL2 with competitive prices and same-day availability.",
    description:
      "We cover Royton town centre, Thorp, Cowlishaw, High Crompton and the Rochdale Road corridor. The team is familiar with the area's mix of Victorian terraces, 1960s estates and newer properties off Eaves Lane.",
    landmarks: ["Royton town centre", "Royton Park", "Shaw (Metrolink nearby)", "Crompton Cricket Club", "Oldham Athletic (nearby)"],
    roads: ["A671 (Rochdale Road)", "A627 (Middleton Road)", "Eaves Lane", "Radcliffe Street", "Shaw Road"],
    schools: ["Royton and Crompton Academy", "St Anne's RC Primary", "Holy Trinity CE Primary", "Fernhurst Primary"],
    shopping: ["Royton local centre", "Oldham Spindles", "Rochdale town centre"],
    stations: ["Shaw and Crompton (Metrolink)"],
    nearbyAreas: ["Oldham", "Shaw", "Chadderton", "Heywood", "Rochdale"],
    distanceToCity: "7 miles from Manchester city centre",
  },
  {
    slug: "mossley",
    name: "Mossley",
    postcode: "OL5",
    county: "Greater Manchester",
    area: "Tameside",
    lat: 53.5155,
    lng: -2.0358,
    intro:
      "Mossley is a hillside mill town in Tameside, known for its stunning moorland scenery, heritage architecture and tight-knit community. Our man and van service covers OL5 and the surrounding Saddleworth villages.",
    description:
      "We cover Mossley town centre, Micklehurst, Roughtown, Heyheads and properties along the Tame Valley. Our team handles the steep terraced streets and narrow lanes of Mossley with care and the right-sized vehicles.",
    landmarks: ["Mossley railway station", "Mossley Hollins High School", "River Tame", "Standedge Tunnel (nearby)", "Saddleworth Moor"],
    roads: ["A670 (Manchester Road)", "B6175 (Stamford Road)", "Micklehurst Road", "Huddersfield Road", "Mossley Road"],
    schools: ["Mossley Hollins High School", "St George's CE Primary", "St Joseph's RC Primary", "Millbrook Primary"],
    shopping: ["Mossley local shops", "Ashton-under-Lyne town centre", "Saddleworth Market"],
    stations: ["Mossley (Manchester Piccadilly–Huddersfield line)"],
    nearbyAreas: ["Ashton-under-Lyne", "Stalybridge", "Saddleworth", "Uppermill", "Dukinfield"],
    distanceToCity: "10 miles from Manchester city centre",
  },
  {
    slug: "eccles",
    name: "Eccles",
    postcode: "M30",
    county: "Greater Manchester",
    area: "Salford",
    lat: 53.4847,
    lng: -2.3320,
    intro:
      "Eccles is one of Greater Manchester's best-connected towns, with Metrolink access, the A57 and proximity to the M60. Our man and van service covers all of M30 with same-day availability.",
    description:
      "We cover Eccles town centre, Winton, Monton, Barton and Peel Green. Our team regularly moves between Eccles and MediaCityUK, Salford Quays and Manchester city centre — one of our most popular local routes.",
    landmarks: ["Eccles Metrolink", "Barton Aerodrome", "Monton Village", "MediaCityUK (nearby)", "Eccles Cross"],
    roads: ["A57 (Liverpool Road)", "M60 (Junctions 11–12)", "A576 (Regent Road)", "Patricroft Road", "Barton Road"],
    schools: ["Eccles Sixth Form College", "St Gilbert's RC Primary", "Barton Clough Primary", "Holy Cross RC Primary"],
    shopping: ["Eccles town centre", "Salford Quays", "The Trafford Centre"],
    stations: ["Eccles (Metrolink – MediaCity line)", "Patricroft (Manchester Victoria line)"],
    nearbyAreas: ["Salford", "Swinton", "Worsley", "Stretford", "Pendleton"],
    distanceToCity: "5 miles from Manchester city centre",
  },
  {
    slug: "irlam",
    name: "Irlam",
    postcode: "M44",
    county: "Greater Manchester",
    area: "Salford",
    lat: 53.4439,
    lng: -2.4277,
    intro:
      "Irlam is a residential suburb of Salford bordering the Manchester Ship Canal, popular with families for its affordable housing and good schools. Our man and van team covers all of M44.",
    description:
      "We cover Irlam town centre, Cadishead, Hollins Green, Glazebrook and Partington. Our team knows the quieter streets of M44 well and offers competitive rates for moves in and around the area.",
    landmarks: ["Irlam railway station", "Manchester Ship Canal", "Irlam Wharf", "Cadishead Park", "Glazebrook Moss"],
    roads: ["A57 (Liverpool Road)", "A572 (Chapel Road)", "M60 (Junction 11)", "Liverpool Road", "Fiddlers Lane"],
    schools: ["Irlam & Cadishead College", "St Teresa's RC Primary", "St Mary's CE Primary", "Cadishead Primary"],
    shopping: ["Irlam local centre", "Eccles town centre", "Trafford Centre"],
    stations: ["Irlam (Manchester Victoria line)"],
    nearbyAreas: ["Eccles", "Cadishead", "Partington", "Rixton", "Salford"],
    distanceToCity: "9 miles from Manchester city centre",
  },
  {
    slug: "swinton",
    name: "Swinton",
    postcode: "M27",
    county: "Greater Manchester",
    area: "Salford",
    lat: 53.5118,
    lng: -2.3397,
    intro:
      "Swinton is a busy town in the city of Salford, well-connected to both Manchester and Bolton via the A666 and A57. Our man and van service covers all of M27 at competitive prices.",
    description:
      "We cover Swinton town centre, Pendlebury, Clifton, Agecroft and Little Bolton. The team is very experienced across M27 — regularly helping families move between Swinton and Walkden, Eccles or Salford.",
    landmarks: ["Swinton town centre", "Agecroft Cemetery", "Clifton Country Park", "Salford City boundary", "East Lancs Road (A57)"],
    roads: ["A666 (Bolton Road)", "A57 (East Lancashire Road)", "A576 (Station Road)", "Chorley Road", "Worsley Road"],
    schools: ["Swinton Community School", "St Augustine's RC Primary", "Moorside Primary", "Our Lady of Lourdes RC Primary"],
    shopping: ["Swinton Point Shopping", "Eccles town centre", "Manchester Arndale"],
    stations: ["Swinton (Manchester Victoria line)", "Pendlebury (nearby)"],
    nearbyAreas: ["Eccles", "Walkden", "Salford", "Pendlebury", "Bolton"],
    distanceToCity: "6 miles from Manchester city centre",
  },
  {
    slug: "tyldesley",
    name: "Tyldesley",
    postcode: "M29",
    county: "Greater Manchester",
    area: "Wigan",
    lat: 53.5132,
    lng: -2.4731,
    intro:
      "Tyldesley is a former coal mining town in the borough of Wigan, close to Atherton, Leigh and the M61. Our man and van team covers all of M29 with fast, affordable removals.",
    description:
      "We cover Tyldesley town centre, Shakerley, Mosley Common, Gin Pit and Astley. The team operates along the A577 daily and handles moves between Tyldesley and the wider Wigan, Bolton and Manchester corridors.",
    landmarks: ["Tyldesley town centre", "Astley Green Colliery Museum", "Mosley Common", "Gin Pit", "Bridgewater Canal"],
    roads: ["A577 (Mosley Common Road)", "A579 (Leigh Road)", "A572 (Manchester Road)", "Chapel Street", "Elliott Street"],
    schools: ["Tyldesley Primary", "St George's CE Primary", "Hindsford CE Primary", "Westleigh High School (nearby)"],
    shopping: ["Tyldesley local shops", "Leigh town centre", "Wigan town centre"],
    stations: ["Atherton rail station (nearby)"],
    nearbyAreas: ["Atherton", "Leigh", "Astley", "Eccles", "Worsley"],
    distanceToCity: "11 miles from Manchester city centre",
  },
  {
    slug: "golborne",
    name: "Golborne",
    postcode: "WA3",
    county: "Greater Manchester",
    area: "Wigan",
    lat: 53.4773,
    lng: -2.5959,
    intro:
      "Golborne is a small town on the southern edge of Greater Manchester, bordering Warrington and close to the M6 and A573. Our man and van service covers WA3 at highly competitive prices.",
    description:
      "We cover Golborne town centre, Lowton, Kenyon and Hermitage Green. Golborne is one of our lower-competition zones, meaning faster bookings and excellent value for house moves in and out of WA3.",
    landmarks: ["Golborne town centre", "Golborne Sports Centre", "M6 (Junction 23)", "Newton-le-Willows (nearby)", "Lowton"],
    roads: ["A573 (Winwick Road)", "A572 (Newton Road)", "M6 (Junction 23)", "Stone Cross Lane", "Harvey Lane"],
    schools: ["Golborne Community School", "St Thomas' CE Primary", "Lowton CE Primary", "Sacred Heart RC Primary"],
    shopping: ["Golborne local shops", "Leigh town centre", "St Helens"],
    stations: ["Golborne (no rail – Leigh Bus Rapid Transit)"],
    nearbyAreas: ["Leigh", "Newton-le-Willows", "Lowton", "Warrington", "Wigan"],
    distanceToCity: "16 miles from Manchester city centre",
  },
  {
    slug: "westhoughton",
    name: "Westhoughton",
    postcode: "BL5",
    county: "Greater Manchester",
    area: "Bolton",
    lat: 53.5499,
    lng: -2.5268,
    intro:
      "Westhoughton is a large town in the borough of Bolton, known for the famous Keaw Yed Wakes and excellent M61 motorway access. Our man and van team covers all of BL5.",
    description:
      "We cover Westhoughton town centre, Daisy Hill, Wingates, Blackrod, Chequerbent and Hunger Hill. The team operates along the A6 and A58 corridors daily, connecting Westhoughton moves to Bolton, Leigh and Manchester.",
    landmarks: ["Westhoughton town centre", "Daisy Hill railway station", "Wingates Industrial Estate", "Blackrod village", "M61 (Junction 5)"],
    roads: ["A6 (Manchester Road)", "A58 (Bolton Road)", "A6041", "M61 (Junctions 5–6)", "Leigh Road"],
    schools: ["Westhoughton High School", "Sacred Heart RC Primary", "St Bartholomew's CE Primary", "Daisy Hill Primary"],
    shopping: ["Westhoughton local centre", "Bolton town centre", "Middlebrook Retail Park"],
    stations: ["Daisy Hill (Wigan–Bolton line)", "Hindley (nearby)"],
    nearbyAreas: ["Bolton", "Horwich", "Hindley", "Atherton", "Leigh"],
    distanceToCity: "13 miles from Manchester city centre",
  },
  {
    slug: "littleborough",
    name: "Littleborough",
    postcode: "OL15",
    county: "Greater Manchester",
    area: "Rochdale",
    lat: 53.6430,
    lng: -2.0944,
    intro:
      "Littleborough is a picturesque market town on the edge of the South Pennines, close to Hollingworth Lake and the Yorkshire border. Our man and van team covers OL15 and the surrounding rural areas.",
    description:
      "We cover Littleborough town centre, Shore, Caldermoor, Summit, Smithybridge and Hollingworth Lake. Our team handles moves on the hill roads and moorland lanes with appropriate vehicles and expert local knowledge.",
    landmarks: ["Hollingworth Lake", "Littleborough railway station", "Summit tunnel", "Pennine Way (nearby)", "Littleborough Market"],
    roads: ["A58 (Halifax Road)", "A6033 (Todmorden Road)", "B6225 (Lake Bank)", "Summit Road", "Rochdale Road"],
    schools: ["Littleborough Community Primary", "St Alban's RC Primary", "Shore Primary", "Smithybridge Primary"],
    shopping: ["Littleborough local shops", "Rochdale town centre", "Todmorden Market"],
    stations: ["Littleborough (Manchester Victoria–Leeds line)", "Smithybridge (nearby)"],
    nearbyAreas: ["Rochdale", "Todmorden", "Milnrow", "Summit", "Wardle"],
    distanceToCity: "14 miles from Manchester city centre",
  },
  {
    slug: "ashton-under-lyne",
    name: "Ashton-under-Lyne",
    postcode: "OL6",
    county: "Greater Manchester",
    area: "Tameside",
    lat: 53.4992,
    lng: -2.0966,
    intro:
      "Ashton-under-Lyne is the market town at the heart of Tameside, with an excellent indoor market, strong transport links and a diverse community. Our man and van team covers all of OL6 and Tameside.",
    description:
      "We cover Ashton town centre, Cockbrook, Hurst, Smallshaw, Taunton and Limehurst. Our removal vans operate on the A57, A670 and M60 daily — giving our Ashton customers fast access and reliable service.",
    landmarks: ["Ashton Market", "Ashton Metrolink", "Stamford Park", "Portland Basin Museum", "Tameside General Hospital"],
    roads: ["A57 (Manchester Road)", "A670 (Mossley Road)", "A635 (Cavendish Street)", "M60 (Junction 23)", "Oldham Road"],
    schools: ["Ashton Sixth Form College", "Blessed John Henry Newman RC College", "St Peter's RC Primary", "Cavendish Primary"],
    shopping: ["Ashton Market", "Ashton Arcades", "Oldham town centre"],
    stations: ["Ashton-under-Lyne (Metrolink)", "Stalybridge (rail)"],
    nearbyAreas: ["Oldham", "Stalybridge", "Droylsden", "Mossley", "Hyde"],
    distanceToCity: "7 miles from Manchester city centre",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
