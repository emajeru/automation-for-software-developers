# This script will receive a single argument presented under '$1'. 
# It will then attempt to curl to that address and output the result 
# to an html file. This will occur over and over again for each entry in
# the data.txt file.

URI=$1
while true
do
  curl -i $URI -s 1> "output/$URI_output.txt"
done