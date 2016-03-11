# azure-mobile-apps-compatibility

This module allows you to generate a set of scaffolded table and custom API
definitions from the set of definition files from an Azure Mobile Service.

The generated app is ready to deploy to an Azure Mobile App and should work
for simple applications. More complex applications, particularly those using
authentication, will likely require some code changes.

It is important to note that client applications will also require updating to
the latest version of Azure Mobile Apps.

##### This module is experimental.

## Usage

To install, execute the following with elevated privileges:

    npm i -g azure-mobile-apps-compatibility

This installs a command line utility with the following usage:

    scaffold-mobile-app <inputPath> <outputPath>

For example,

    scaffold-mobile-app scripts out

reads the Azure Mobile Service definition from the `scripts` directory located
in the current working directory and creates a directory called `out` with a
scaffolded Mobile App.

## Running Locally

To run the app locally, change to the output directory and install required
node modules by executing:

    npm i

You must also edit the `azureMobile.js` file and provide appropriate data
connection information.

The server can be started by running:

    node --debug app.js

from the output directory. This starts the server on port 3000.

## Obtaining Mobile Service Definitions

Open the following URL in your browser:

    https://<mobile_service_name>.scm.azure-mobile.net/DebugConsole

Navigate by clicking on the directory names to the following location:

    site/wwwroot/App_Data/config

Download the `scripts` directory in ZIP format by clicking on the download
icon next to the folder name.

## Troubleshooting

### Cannot find module 'xxx'

Dependencies on external modules such as `azure` and `async` have not been
included by default to reduce the size of the application. If you are using
any external modules, you will need to install them by executing:

    npm i <module_name> --save

The `--save` option adds the dependency to the `package.json` file so it is
also installed when deployed to Azure.

### The table 'xxx' does not exist

The getTable function is now case sensitive. Check to ensure the appropriate
case is being used.

### Invalid column name '__createdAt'

The double underscore notation for createdAd, updatedAt, version and deleted
columns have been removed. You will need to update any column references
manually.
