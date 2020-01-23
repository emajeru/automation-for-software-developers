### Running Ansible
With the `inventory` and `ansible.cfg` configured,, we are ready to start using our playbooks.
```bash
# Create a administrative user named **edison** with the given password. Note that the '-i ./inventory' is optional as we set it in our ansible.cfg file.
ansible-playbook -i ./inventory playbooks/pb_add_user.yml -e 'username=developer password=password' -u root

# Upload ssh public key for the designated user for password-less login.
ansible-playbook playbooks/pb_add_user_ssh.yml -e 'username=developer' -u root

# Reconfigure the ssh settings to disallow remote root login as well as password authentication. This process also backs up the earlier configuration to your local machine for safe-keeping.
ansible-playbook playbooks/pb_configure_ssh.yml -u root

# Do a lot of stuff to make sure that the hostname is changed correctly in all relevant places. (May only work on Ubuntu). This task also reboots the server at the end of its run.
ansible-playbook playbooks/pb_set_hostname.yml

# Once you have an idea of how your server needs to be setup, you can place all of these steps into a single playbook and run it against them for faster setup. Try running this on a completely untouched server or servers that you have root access to and appreciate the power of ansible. All you need to do is place them within the inventory file.
ansible-playbook playbooks/pb_setup_host.yml -u root
```