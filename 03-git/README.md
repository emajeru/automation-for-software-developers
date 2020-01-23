## Git Demo Commands

1. Create the bare repository that can be used as a remote store for the code.
```bash
git init --bare demo-repo.git
```

2. Clone the newly created repo's code directory for editing and navigate into the hooks folder.
```bash
git clone demo-repo.git
cd demo-repo.git/hooks
```

3. Copy the hook sample to its own file and create the post-receive hook file to edit both.
```bash
touch commit-msg #(optional if you want to modify the commit message check)
touch post-receive
```

4. Copy the contents of the below into the commit-msg hook file
```bash
#!/bin/sh

test "1" = "$(grep -c 'Signed-off-by:' "$1")" || {
	echo >&2 No use of the Signed-off-by key
	exit 1
}
```

The result of this new hook will check every commit before it is done to confirm that the commit message includes the string 'Signed-off-by:' at least once. If the message does not contain it, then the commit will fail.

5. Copy the contents of the below into the post-receive hook file
```bash
#!/bin/sh

while read oldrev newrev refname
do
  mkdir "/Users/$USERNAME/Desktop/$(git rev-parse --symbolic --abbrev-ref $refname)-$(date).txt"
done
```

The result of the new hook is that everytime a new commit is pushed to the repository, the hook will run on a successful receive and then create a file with the name of the branch and the time as the name.