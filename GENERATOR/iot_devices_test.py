file1 = open("iot_devices.txt","r")

# deviceNames = ['SBS01', 'SBS02', 'SBS03', 'SBS04', 'SBS05', 'SBS06', 'SBS07', 'SBS08', 'SBS09', 'SBS10', 'SBS11']
# wards = {'SBS01':'A-4.1', 'SBS02':'B1-3.1', 'SBS03':'B1-3.1', 'SBS04':'B1-3.1', 'SBS05':'B1-3.1', 'SBS06':'B1-3.2', 'SBS07':'B1-3.2', 'SBS08':'B1-3.2', 'SBS09':'B1-3.2', 'SBS10':'B1-3.2', 'SBS11':'B1-3.2'}
# beds =  {'SBS01':'1', 'SBS02':'1', 'SBS03':'2', 'SBS04':'3', 'SBS05':'4', 'SBS06':'1', 'SBS07':'2', 'SBS08':'3', 'SBS09':'4', 'SBS10':'5', 'SBS11':'6', 'SBS12':'B1-3.2'}

deviceNames = []
wards = {}
beds = {}
for line in file1:
    lineSplit = line.split("\t")
    deviceName = lineSplit[0]
    wardName = lineSplit[1]
    bedNo = int(lineSplit[2].rstrip('\n'))
    deviceNames.append(deviceName)
    wards[deviceName] = wardName
    beds[deviceName] = bedNo

print("devicesNames =", deviceNames, "\n\n")
print("wards =", wards, "\n\n")
print("beds =", beds, "\n\n")



