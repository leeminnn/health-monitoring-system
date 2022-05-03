file1 = open("iot_devices.txt","w")
id = 0
prefix = "IOT"

allocation = {
    "A" : 5,
    "B1" : 5,
    "B2" : 5,
    "C" : 6
} #edit to adjust number of wards for each type

bedsToWards = {
    "A": 1,
    "B1": 4,
    "B2": 6,
    "C": 8
} #DO NOT CHANGE

numABeds = allocation["A"] * bedsToWards["A"]
numB1Beds = allocation["B1"] * bedsToWards["B1"]
numB2Beds = allocation["B2"] * bedsToWards["B2"]
numCBeds = allocation["C"] * bedsToWards["C"]

totalBeds = numABeds + numB1Beds + numB2Beds + numCBeds
print("Total number of IOT devices (assume 1 IoT device/bed):", totalBeds)


for ward in allocation:
    wardType = ward
    wardNo = 0
    for i in range(allocation[ward]):
        wardNo += 1
        bedNo = 0
        for j in range(bedsToWards[ward]):
            bedNo += 1
            deviceName = prefix + "-" + str(id)
            wardName = wardType + "-" + str(wardNo)

            file1.write(deviceName + "\t" + wardName + "\t" + str(bedNo) + "\n")
            id += 1

file1.close()