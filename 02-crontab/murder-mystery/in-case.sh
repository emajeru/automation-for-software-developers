#!/bin/bash

file="last_entry_date.txt"
last_entry=`cat $file` # Wed Jan 22 23:37:42 UTC 2020
now=`date +'%s'`
difference="$(($now - $last_entry))"

if [ $difference -gt 3600 ]
    then
    echo "Sending message as $difference seconds have passed since last entry"
    curl --user 'api:<mailgun-key>' \
        https://api.mailgun.net/v3/<your-domain>/messages \
        -F from='Edison Hanchell <<edison@my-domain.com>>' \
        -F to='Edison Hanchell <<recipient@their-domain.com>>' \
        -F subject='I was murdered' \
        -F text='I was murdered but I predicted it. I got his picture. Arrest him.' \
        --form-string html='<html>I was murdered but I predicted it. I got his picture. Arrest him.</html>' \
        -F attachment=@culprit.png
else
    echo "Only $difference seconds have passed since the last entry"
fi