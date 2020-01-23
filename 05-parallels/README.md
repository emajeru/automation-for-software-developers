## Parallels Demo Commands

```bash
# Parallels takes in the number of objects you would like to create, separated by line and then passes the data from that line into each of the commands as flags.

# What below line does is echo the numbers 1 - 100 on their own line and then *pipe* that output into the parallel command which then passes it into the '{}' of the following command, in this case, the curl. The curl command will hit the page that is presented at the given URL. The result of which is then passed to the /dev/null output so that it doesn't appear on the screen. 
echo {1..100} | parallel curl -i http://venturecowork.com -s 1> /dev/null {}

# This could easily have been a script instead.
# This line prints the content of the data.txt file and then pipes the results into the parallel command which then calls a script file that it will pass a single line into per line of information in the data.txt file.
cat data.txt | parallel ./script_to_run.sh {}
```