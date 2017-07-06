###########################################################$ 
# ARKHELPER (WIP)
# Reads .arkprofile(s) from desired directory, then uses 
# ArkTools parser to convert to readable JSON, and finally 
# renames parsed files to remove .ark extensions 
# 
#	Source: ArkSave Directory 
# 	Out:	Destination Directory
############################################################
$out="C:\Users\rpeti\Desktop\Converted\Players"
$source = "C:\Users\rpeti\Desktop\Converted\rawplayerdata"
foreach($file in Get-ChildItem -Path $source *.arkprofile)
{
 $name = $file.name.replace(".arkprofile", "")
  iex ".\ark-tools.exe players $source\$file $out"
}

##C:\Users\rpeti\Desktop\Converted\ark-tools.exe