# **Generate small to large amount of fake, random data with nodejs**

## Address & phone etc is based on the UK format currently.

### Currently Added & Working Generators

```bash
npm i impostor_js

or

yarn add impostor_js
```

## Node.js

```javascript
const impostor = require("impostor_js");

impostor.user.personName(); // Carl
impostor.user.personEmail(optional: "name1", optional: "name2"); // carlbeattie@gmail.com
impostor.bankAccounts.createCard(); // random bank card
impostor.bankAccounts.createMultipleCards(10); // create multiple bank cards
```

- user
  - personName("firstName" | "middleName" | "lastName")
  - phoneNumber("mobile" | "home")
  - personEmail(optional: "name1", optional: "name2")
  - dob(optional: maxYearBorn)
  - jobName
  - jobPosition
  - jobIndustry
  - createUser
- address
  - postcode
  - streetName
  - doorNumber
  - city
  - county
  - country
  - createAddress
- landmarks
  - landmark
- entertainment
  - movieGenre
  - musicGenre
  - artist
  - performer
- bank
  - bankName
  - cardNumber
  - expiryDate
  - validFromDate
  - CVV
  - pin
  - sortNumber
  - accountNumber
  - accountLoginID
  - pendingBalance
  - accountBalance
  - createCard
  - createAccount
  - transactions
    - createTransaction
  - flags
    - flagID
    - flagReason
    - createFlag
  - loans
    - createLoan
- crypto
  - ethereumAddress
  - bitcoinAddress
  - bitcoinPrivateKey
  - coin
  - coinName
  - coinPrefix
- internet
  - IPV4
  - IPV6
  - domainName
  - URL
  - arrayDeviceHistory
  - password
  - protocol
  - httpMethod
  - port
- company
  - name
  - catchPhrase
  - annualEarnings(optional: max)
  - annualProfit(optional: earnings)
  - annualLoss(optional: earnings, profit)
- computersParts
  - casePart
  - motherboard
  - ram
  - CPU
  - GPU
  - CPUCooling
  - powerSupply
  - storage
  - buildPC
- deviceInformation
  - macAddress
  - systemSKU
  - softwareBuildID
  - motherboardID
  - hardDriveID
  - operatingSystem
  - lastBIOSUpdate
  - createDeviceDetails

## TODO's

- vehicles
  - make
  - model
  - engine size
  - year registered
  - colour
  - doors
  - plate
  - fuel type
  - type of car
  - vim
