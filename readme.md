# Table of Content

# Hey Dogs - TailBuds

## Setup

### 1. Clone this repository

```{sh}
git clone https://github.com/tailbuds/hey-dog.git
```

### 2. Install

```{sh}
npm install
```

### 3. Start NODE Server

```{sh}
npm start
```

## Hey-Dogs APIs

### Breed APIs

#### POST: Add Breeds

```-X POST http://localhost:3000/breeds```

```-H "Accept: application/json" -H "Content-Type: multipart/form-data"```

Request

```{form-data}
name:Alfa
tagline:Alfa is a good dog
bgImg:(Upload Background Image File)
puppyImg:(Upload Puppy Image File)
minLife:10
maxLife:12
learningRate:High
minLitter:4
maxLitter:6
size:large
weightUnit:1
minMaleWeight:35
maxMaleWeight:45
minFemaleWeight:30
maxFemaleWeight:45
heightUnit:2
minMaleHeight:20
maxMaleHeight:25
minFemaleHeight:20
maxFemaleHeight:25
originCountry:1
otherNames:
desc1:Amazing Dog
desc2:Good Dog
desc3:Best Dog
desc4:null
desc5:null
desc6:null
desc7:null
desc8:null
desc9:null
desc10:null
desc11:null
desc12:null
desc13:null
desc14:null
desc15:null
images:(Upload upto 9 Images)
```

| Sno. | Key             | Data-Type | Limits    | Description                                                                                     |
|------|-----------------|-----------|-----------|-------------------------------------------------------------------------------------------------|
| 1    | name            | String    | 1-65      | Name of the Breed                                                                               |
| 2    | tagline         | String    | 1-135     | Tagline for Breed                                                                               |
| 3    | bgImg           | JPEG/PNG  | 4MB       | One Background Image of the Breed                                                               |
| 4    | puppyImg        | JPEG/PNG  | 4MB       | One Puppy Image of the Breed                                                                    |
| 5    | minLife         | INTEGER   | 1-3       | Minimum Expected Life of the Breed                                                              |
| 6    | maxLife         | INTEGER   | 1-3       | Maximum Expected Life of the Breed                                                              |
| 7    | learningRate    | String    | 1-25      | Learning Rate of the Breed                                                                      |
| 8    | minLitter       | INTEGER   | 1-3       | Minimum number of expected offsprings from a single Female of the Breed in one breeding season. |
| 9    | maxLitter       | INTEGER   | 1-3       | Maximum number of expected offsprings from a single Female of the Breed in one breeding season. |
| 10   | size            | String    | 1-45      | Usual size of the Breed                                                                         |
| 11   | weightUnit      | INTEGER   | 1-3       | Weight Measurement Unit of the Breed                                                            |
| 12   | minMaleWeight   | INTEGER   | 1-5       | Minimum Male Weight of the Breed                                                                |
| 13   | maxMaleWeight   | INTEGER   | 1-5       | Maximum Male Weight of the Breed                                                                |
| 14   | minFemaleWeight | INTEGER   | 1-5       | Minimum Female Weight of the Breed                                                              |
| 15   | maxFemaleWeight | INTEGER   | 1-5       | Maximum Female Weight of the Breed                                                              |
| 16   | heigthUnit      | INTEGER   | 1-3       | Height Measurement Unit of the Breed                                                            |
| 17   | minMaleHeight   | INTEGER   | 1-5       | Minimum Male Height of the Breed                                                                |
| 18   | maxMaleHeight   | INTEGER   | 1-5       | Maximum Male Weight of the Breed                                                                |
| 19   | minFemaleHeight | INTEGER   | 1-5       | Minimum Female Height of the Breed                                                              |
| 20   | maxFemaleHeight | INTEGER   | 1-5       | Maximum Female Weight of the Breed                                                              |
| 21   | originCountry   | INTEGER   | 1-5       | Origin Country of the Breed                                                                     |
| 22   | otherNames      | String    | 1-255     | Alternative name of the Breed seperated by Commas.                                              |
| 23   | desc1           | String    | 1-65,535  | Description 1 of the Breed                                                                      |
| 24   | desc2           | String    | 1-65,535  | Description 2 of the Breed                                                                      |
| 25   | desc3           | String    | 1-65,535  | Description 3 of the Breed                                                                      |
| 26   | desc4           | String    | 1-65,535  | Description 4 of the Breed                                                                      |
| 27   | desc5           | String    | 1-65,535  | Description 5 of the Breed                                                                      |
| 28   | desc6           | String    | 1-65,535  | Description 6 of the Breed                                                                      |
| 29   | desc7           | String    | 1-65,535  | Description 7 of the Breed                                                                      |
| 30   | desc8           | String    | 1-65,535  | Description 8 of the Breed                                                                      |
| 31   | desc9           | String    | 1-65,535  | Description 9 of the Breed                                                                      |
| 32   | desc10          | String    | 1-65,535  | Description 10 of the Breed                                                                     |
| 33   | desc11          | String    | 1-65,535  | Description 11 of the Breed                                                                     |
| 34   | desc12          | String    | 1-65,535  | Description 12 of the Breed                                                                     |
| 35   | desc13          | String    | 1-65,535  | Description 13 of the Breed                                                                     |
| 36   | desc14          | String    | 1-65,535  | Description 14 of the Breed                                                                     |
| 37   | desc15          | String    | 1-65,535  | Description 15 of the Breed                                                                     |
| 38   | images          | JPEG/PNG  | 4MB/Image | Multiple Images  of the Breed upto 9 Images

Response

```{json}
{
    "createdBreed":1
}
```

| Sno. | Key | Data-Type | Limits | Description |
|------|--------------|-----------|--------|---------------------------------|
| 1         | createdBreed | INTEGER | 1         | 1 for Success & 0 for Failure |
| 2                   | reason | JSON | NA | Returns Reason for Failure ONLY |

#### DELETE: Delete a Breed

```-X DELETE http://localhost:3000/breeds/{breedId}```

```-H "Accept: application/json"```

NOTE: breedId is the ID of the breed which is to be passed in the URL.

Response

```{json}
{
    "deletedBreed":1
}
```

| Sno. | Key | Data-Type | Limits | Description |
|------|--------------|-----------|--------|---------------------------------|
| 1         | deletedBreed | INTEGER | 1         | 1 for Success & 0 for Failure |
| 2                   | reason | JSON | NA | Returns Reason for Failure ONLY |

#### GET: Get all breeds

```-X GET http://localhost:3000/breeds```

```-H "Accept: application/json"```

Response

```{array}

[
    {
        "breedId": 10,
        "name": "Alfa",
        "puppyImg": "images\\2020-05-24T19-46-36.703Znahel-abdul-hadi-flha0KwRrRc-unsplash.jpg"
    }
]

```

#### GET: Get a Specific Breed

```-X GET http://localhost:3000/breeds/{breedId}```

```-H "Accept: application/json"```

Response

```{json}

{
    "breedId": 10,
    "name": "Alfa",
    "tagline": "Alfa is a good dog",
    "bgImg": "images\\2020-05-24T19-46-36.702Zcropped-1400-425-587777.png",
    "puppyImg": "images\\2020-05-24T19-46-36.703Znahel-abdul-hadi-flha0KwRrRc-unsplash.jpg",
    "minLife": 10,
    "maxLife": 12,
    "learningRate": "High",
    "minLitter": 4,
    "maxLitter": 6,
    "size": "large",
    "weightUnit": 2,
    "minMaleWeight": 35,
    "maxMaleWeight": 45,
    "minFemaleWeight": 30,
    "maxFemaleWeight": 45,
    "heightUnit": 3,
    "minMaleHeight": 20,
    "maxMaleHeight": 25,
    "minFemaleHeight": 20,
    "maxFemaleHeight": 25,
    "originCountry": 3,
    "otherNames": "",
    "desc1": "Amazing Dog",
    "decs2": null,
    "desc3": "Best Dog",
    "desc4": null,
    "desc5": null,
    "desc6": null,
    "desc7": null,
    "desc8": null,
    "desc9": null,
    "desc10": null,
    "desc11": null,
    "desc12": null,
    "desc13": null,
    "desc14": null,
    "desc15": null,
    "createdAt": "2020-05-24T19:46:37.000Z",
    "updatedAt": "2020-05-24T19:46:37.000Z",
    "BreedImages": {
        "breedId": 10,
        "img1": "images\\2020-05-24T19-46-36.715ZWhatsApp+Image+2020-03-01+at+8.25.12+PM+(2).jpeg",
        "img2": "images\\2020-05-24T19-46-36.717ZWhatsApp+Image+2020-03-01+at+8.25.12+PM+(1).jpeg",
        "img3": "images\\2020-05-24T19-46-36.719ZWhatsApp+Image+2020-03-01+at+8.25.12+PM.jpeg",
        "img4": "images\\2020-05-24T19-46-36.721ZWhatsApp+Image+2020-03-01+at+8.25.09+PM.jpeg",
        "img5": "images\\2020-05-24T19-46-36.723ZWhatsApp+Image+2020-03-01+at+8.25.13+PM.jpeg",
        "img6": null,
        "img7": null,
        "img8": null,
        "img9": null
    },
    "BreedCountry": {
        "countryId": 3,
        "countryName": "INDIA",
        "dialCode": 91,
        "currencyName": "Indian Rupee",
        "capital": "Delhi",
        "regionName": "Asia",
        "alpha2Code": "IN",
        "alpha3Code": "IND",
        "currencyCode": "INR",
        "minorUnits": 2,
        "timeZone": "+5:30"
    },
    "BreedWeight": {
        "measureId": 2,
        "shortName": "Kgs",
        "longName": "Kilograms",
        "category": "Weight",
        "measureSystem": "SI"
    },
    "BreedHeight": {
        "measureId": 3,
        "shortName": "In",
        "longName": "Inches",
        "category": "height",
        "measureSystem": "SI"
    }
}

```

### Country API

#### POST: Add Countries

```-X POST http://localhost:3000/countries```

```-H "Accept: application/json" -H "Content-Type: application/json"```

Request

```{json}
{
        "countryName": "India",
        "dialCode": 91,
        "currencyName": "Indian Rupee",
        "capital": "Delhi",
        "regionName": "Asia",
        "alpha2Code": "IN",
        "alpha3Code": "IND",
        "currencyCode": "INR",
        "minorUnits": 2,
        "timeZone": "+5:30"
}
```

| Sno | Key          | data type | Length Limits | Description                                                          |
|-----|--------------|-----------|---------------|----------------------------------------------------------------------|
| 1   | countryName  | String    | 1-135         | Name of the country                                                  |
| 2   | dialCode     | Integer   | 1-10          | country phone dial code                                              |
| 3   | currencyName | String    | 1-45          | Name of the currency used in the country                             |
| 4   | capital      | String    | 1-135         | Country's capital                                                    |
| 5   | regionName   | String    | 1-136         | Region of the country                                                |
| 6   | alpha2Code   | String    | 2             | 2 character country code                                             |
| 7   | alpha3Code   | String    | 3             | 3 character country code                                             |
| 8   | currencyCode | String    | 3             | currency code of the country's currency                              |
| 9   | minorUnits   | Integer   | 1-3           | the decimal places used to represent the minor units of the currency |
| 10  | timeZone     | String    | 5             | the timezone of the country like "+5:30"                             |

#### DELETE: Delete a Country

```-X DELETE http://localhost:3000/country/{countryId}```

```-H "Accept: application/json"```

Response

```{json}
{
    "deletedCountry":1

}

```

| Sno. | Key | Data-Type | Limits | Description |
|------|--------------|-----------|--------|---------------------------------|
| 1         | deletedCountry | INTEGER | 1         | 1 for Success & 0 for Failure |
| 2                   | reason | JSON | NA | Returns Reason for Failure ONLY |

#### GET: Get all Countries

```-X GET http://localhost:3000/countries```

```-H "Accept: application/json"```

Response

```{array}

[
    {
        "countryId": 3,
        "countryName": "INDIA",
        "dialCode": 91,
        "currencyName": "Indian Rupee",
        "capital": "Delhi",
        "regionName": "Asia",
        "alpha2Code": "IN",
        "alpha3Code": "IND",
        "currencyCode": "INR",
        "minorUnits": 2,
        "timeZone": "+5:30"
    }
]

```

#### GET: Get a Specific Country

```-X GET http://localhost:3000/countries/{countryId}```

```-H "Accept: application/json"```

Response

```{json}

{
        "countryId": 3,
        "countryName": "INDIA",
        "dialCode": 91,
        "currencyName": "Indian Rupee",
        "capital": "Delhi",
        "regionName": "Asia",
        "alpha2Code": "IN",
        "alpha3Code": "IND",
        "currencyCode": "INR",
        "minorUnits": 2,
        "timeZone": "+5:30"
}

```

### Measurement-Unit API

#### POST: Add Measurement Unit

```-X POST http://localhost:3000/measurements```

```-H "Accept: application/json" -H "Content-Type: application/json"```

Request

```{json}

{
    "shortName": "In",
    "longName": "Inches",
    "category": "height",
    "measureSystem": "SI"
}
```

| Sno. | Key               | Data-Type | Limits | Description                                        |
|------|-------------------|-----------|--------|----------------------------------------------------|
| 1    | shortName         | String    | 1-3    | Short Name of the Measurement Unit                 |
| 2    | longName          | String    | 1-20   | Long Name of the Measurement Unit                  |
| 3    | category          | String    | 1-45   | Cateogry of the Measurement Unit, Eg: Light,Speed  |
| 4    | measurementSystem | String    | 1-135  | Measurement System Eg: SI/Imperial                 |
|      |                   |           |        |                                                    |

#### DELETE: Delete a Measurement Unit

```-X DELETE http://localhost:3000/measurement/{shortName}```

```-H "Accept: application/json"```

Response

```{json}
{
    "deletedMeasurementUnit": 1
}

```

| Sno. | Key | Data-Type | Limits | Description |
|------|--------------|-----------|--------|---------------------------------|
| 1         | deletedMeasurementUnit| INTEGER | 1         | 1 for Success & 0 for Failure |
| 2                   | reason | JSON | NA | Returns Reason for Failure ONLY |

#### GET: Get all Measurement Units

```-X GET http://localhost:3000/measurement```

```-H "Accept: application/json"```

Response

```{array}

[
    {
        "measureId": 2,
        "shortName": "Kgs",
        "longName": "Kilograms",
        "category": "Weight",
        "measureSystem": "SI"
    },
    {
        "measureId": 3,
        "shortName": "In",
        "longName": "Inches",
        "category": "height",
        "measureSystem": "SI"
    }
]

```

#### GET: Get a Specific Measurement Units

```-X GET http://localhost:3000/measurement/{shortName}```

```-H "Accept: application/json"```

Response

```{json}
{
    "measureId": 3,
    "shortName": "In",
    "longName": "Inches",
    "category": "height",
    "measureSystem": "SI"
}
```
