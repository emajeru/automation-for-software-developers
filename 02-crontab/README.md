## Crontab Demo Commands

```bash
# Use this command to list the crontab entries for the current user.
# using the '-u' flag will allow you to view the crontab for another
# user account that you have access to or know the password for.
crontab -l
crontab -l -u other-user

# Use this command to open the current user's crontab for editing using your
# assigned editor. You'll be prompted if an editor is not already set. VI for the win!
crontab -e

# Upon opening the crontab, you'll see the below format. Each of the spaced options matches
# with a crontab parameter.
# m(inute) h(our) dow mon dom command
* * * * * touch "/root/$(date).txt"
*/5 * * * * /bin/bash /root/check-site-up.sh

# The above entries perform the following actions:
# 1. Creates a file inside of the root directory that is named based on the current time.
# 2. Every 5 minutes (shown by the asterisk dividing the number of minutes) run a script using the bash terminal shell.
# to delete a job, you can either add a '#' in front of it or simply delete the command.
```