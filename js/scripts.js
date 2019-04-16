//Business Logic for FOOD-location OBJECT
function FoodLocation() {
  name: this.name,
  region: this.region,
  phoneNumber: this.phoneNumber,
  address: this.address,
  dayOfMonth: this.dayOfMonth,
  hours: this.hours,
  website: this.website,
  type: this.type,
  restrictions: this.restrictions,
}

//Database of Food-Location Objects
var north1a = new FoodLocation ("University Park Community - SeventhDay Adventist Churst", "North Portland", "503-289-8792", "4007 N Alaska St, Portland, OR 97203", "Every Wednesday", "5:00-7:00pm", "https://www.uparksda.org/community-services-university-park-portland-oregon.html", "Food Pantry", "This location serves all areas, offering fresh fruits and vegetables, canned, frozen and dry items. Come early to reserve your place in line, and bring a bag.")
var north1b = new FoodLocation ("University Park Community - SeventhDay Adventist Churst", "North Portland", "503-289-8792", "4007 N Alaska St, Portland, OR 97203", "First Friday of every month", "10:00am-12:00pm", "https://www.uparksda.org/community-services-university-park-portland-oregon.html", "Food Pantry - Produce Only", "This location serves all areas, offering fresh produce. Come early to reserve your place in line, and bring a bag.")
var north2 = new FoodLocation ("St. Vincent De Paul's - Holy Redeemer", "North Portland", "503-235-8431", "25 N Rosa Parks Way, Portland, OR 97217", "Every Wednesday and Saturday", "2:30-4pm", "http://church.holyredeemerpdx.org/service/", "Food Pantry", "This location offers emergency food for people living in the 97217 and 97211 zip codes. The SVDP Food Room is located on the back side of the church, basement level. Bring a bag!")

var northEast1 = new FoodLocation ("Ortiz Center Free Food Market", "Northeast Portland", "503-988-3509", "6736 NE Killingsworth, Portland, OR 97218", "First Thursday of every month", "9:00-9:45am", "https://multco.us/buildings/baltazar-f-ortiz-community-center", "Food Pantry", "This location serves all areas. No income verification required. Random number given at start of distribution. Please bring a bag.")
var northEast2 = new FoodLocation ("Genesis Community Fellowship Food Pantry", "Northeast Portland", "503-281-9472", "5425 NE 27th Ave, Portland, OR 97211", "Every Monday and Thursday", "4:00-6:00pm", "http://genesischurchpdx.org/genesis-community-food-pantry/", "Food Pantry", "This location serves all areas. Open to anyone in need of food assistance, no income verification required. Bring a bag.")
var northEast3 = new FoodLocation ("Alberta Park - Summer Meals For Kids", "Northeast Portland", "503-916-3347", "NE 22nd & Killingsworth, Portland, Or", "Monday-Friday, every week", "11:30am-12:30pm", "https://www.portlandoregon.gov/parks/69873", "Meal", "This location serves a lunchtime meal to children 1-18 years of age.")

var southEast1 = new FoodLocation ("St Mark's Lutheran Church", "Southeast Portland", "503-777-1443", "5415 SE Powell Blvd, Portland, OR 97206", "Every Friday", "3:00-5:30pm", "http://stmarkspdx.qwestoffice.net/food-pantry.html", "Food Pantry", "This location serves those in the 97206 area code. Go to the basement entrance on the 54th Avenue side of the church.")
var southEast2 = new FoodLocation ("All Saints Episcopal Church", "Southeast Portland", "503-705-1408", "4033 SE Woodstock Blvd, Portland, OR 97202", "Every Saturday", "11:00am-1:00pm", "https://www.allsaintspdx.org/?page_id=63", "Meal", "This locations serves all areas, offering a lunchtime meal.")

var northWest1a = new FoodLocation ("Preston's Pantry at First Immanuel Lutheran Church", "Northwest Portland", "503-221-1224", "1808 NW Irving St, Portland, OR 97209", "Every Tuesday and Friday", "12:00-2:00pm", "https://www.lifturbanportland.org/", "Food Pantry", "This locations serves area codes 97201, 97204, 97205, 97209, and 97210. You must be within eligible income guidelines: https://www.lifturbanportland.org/need-food.html. You must bring proof of residency. Visitors leave with about three bags of groceries - please bring your own bags - and may visit this pantry once a month.")
var northWest1b = new FoodLocation ("Preston's Pantry at First Immanuel Lutheran Church", "Northwest Portland", "503-221-1224", "1808 NW Irving St, Portland, OR 97209", "Every Thursday", "5:30-7:30pm", "https://www.lifturbanportland.org/", "Food Pantry", "This locations serves area codes 97201, 97204, 97205, 97209, and 97210. You must be within eligible income guidelines: https://www.lifturbanportland.org/need-food.html. You must bring proof of residency. Visitors leave with about three bags of groceries - please bring your own bags - and may visit this pantry once a month.")
var northWest2 = new FoodLocation ("Free Food Market at First Immanuel Lutheran Church", "Northwest Portland", "503-221-1224", "1808 NW Irving St, Portland, OR 97209", "Every second Wednesday", "9:00-10:00am", "https://www.lifturbanportland.org/", "Food Pantry - Produce Only", "This locations serves everyone. Bring a bag and come a half hour early for free coffee and tea.")
var northwest3 = new FoodLocation ("Trinity Episcopal Cathedral Meal Service", "Northwest Portland", "503-478-1210", "147 NW 19th Avenue, Portland, OR 97209", "Every Wednesday", "11:00am-1:00pm", "https://www.trinity-episcopal.org/outreach-hunger", "Meal", "This location serves all areas, offering a lunchtime meal.")

var southWest1a = new FoodLocation ("Neighborhood House Community Services", "Southwest Portland", "503-246-1663", "334 SW Moss St, Portland, OR 97219", "Every Monday and Wednesday", "10:00am-12:00pm, and 1:30-5:00pm", "http://www.nhpdx.org/WhatWeDo/food.html", "Food Pantry", "This location provides a food box with a mix of perishable and non-perishable items. To be eligible, you must be cuurently participating in the Food Stamp Program, TANF, SSI, LIEAP, or State General Assistance or if your income is below the guidelines listed at this wbsite: https://www.lifturbanportland.org/need-food.html")
var southWest1b = new FoodLocation ("Neighborhood House Community Services", "Southwest Portland", "503-246-1663", "334 SW Moss St, Portland, OR 97219", "Every Thursday", "3:00-8:00pm", "http://www.nhpdx.org/WhatWeDo/food.html", "Food Pantry", "This location provides a food box with a mix of perishable and non-perishable items. To be eligible, you must be cuurently participating in the Food Stamp Program, TANF, SSI, LIEAP, or State General Assistance or if your income is below the guidelines listed at this wbsite: https://www.lifturbanportland.org/need-food.html")

var downtown1 = new FoodLocation ("Potluck in the Park", "Downtown Portland", "503-255-7611", "SW 9th Ave & SW Washington St Portland OR 97205", "Every Sunday", "3:00-4:00pm", "https://www.potluckinthepark.org/", "Meal", "This location serves all areas, offering an afternoon meal.")
var downtown2 = new FoodLocation ("Portland State University Free Food Marke", "Downtown Portland", "503-282-0555", "1825 SW Brodway, Portland OR 97201", "Every second Monday of the month", "12:00pm", "https://www.pdx.edu/student-access-center/free-food-market", "Meal", "This location serves all areas, offering a lunchtime meal located outside of Shattuck Hall on the Portland State University campus.")

//UI for Daily calendar on index.html
