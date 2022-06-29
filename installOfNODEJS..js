// How to Install Node.js and NPM on Windows 
// Step 1: Download Node.js Installer 
// Go to https://nodejs.org/en/download/ via a web browser. To get the newest default version, click the Windows Installer button. Version 16.15.0-x64 is the latest version of Node JS that is currently available.  

// Step 2: Installing Node JS from the installer window 
// Run the installer when it has finished downloading. Click the file on the downloads link in your browser. Alternatively, go to the directory where you saved the file and right-click and click Open or double-click to open it.
// If the system prompts you to launch the program, select Run.
// The Node.js Setup Wizard will appear, and you now need to click on Next.
// Review the licensing agreement on the following screen. Agree to the terms and policies provided to you after reading them carefully.
// The installer will ask you where you want to install it. Leave the default location unless you need it at another location, and then click on Next.
// The wizard will let you select components to include or remove from the installation. Again, accept the defaults unless you have a specific need by clicking Next.
// Finally, to start the installer, click the Install option. Click Finish when it's finished.
// Step 3: Verify Installation 

// Enter the following into a command prompt (or PowerShell): 

// $ node -v 
// The system should show the Node.js version installed on your machine. You can use the same logic for NPM: 

// $ npm -v 
// How to Install Node.js and NPM on MacOS

// Step 1: Download the .pkg Installer. 
// For Mac, Node provides a .pkg installer. We may also get it via the company's official website. To download the .pkg installer, go to the macOS Installer option on the official website and download it to your preferred location. 

// Step 2: Run Node.js Installer 
// Your installer is now ready to use. Let’s go to the steps of installing it one by one. All these steps would be what you will be facing in the installer: 
// Introduction > Continue License > Select Continue > Agree Installation Type > Install > Authenticate with your Mac to allow the Installation > Install Software Summary > Close 

// Step 3: Verify Node.js Installation 
// Run the following command in your terminal to see if Node.js is installed correctly on your Mac: 

// $ node -v 
// Step 4: Update NPM 

// Run the following command to update the NPM package manager once Node JS is installed. 

// $ sudo npm install npm --global  
// Step 5: Set Node JS in the PATH variable 

// $ *export PATH=/usr/local/git/bin:/usr/local/bin:$PATH* 
