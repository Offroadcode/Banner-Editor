# Banner-Editor
A responsive image banner editor package for Umbraco.

### Install Dependencies
*Requires Node.js to be installed and in your system path*

    npm install -g grunt-cli && npm install -g grunt
    npm install

### Build

#### Initial Build

Before you can do the initial build, you'll need to open the **Orc.BannerEditor.sln** file, restore the nuget packages, and build. This version of the Umbraco package builder does not use grunt's MSBuild due to errors, so the C# needs to be handled in Visual Studio.

#### Continued Build/Post Initial C# Build

    grunt

Builds the project to /dist/. These files can be dropped into an Umbraco 7 site, or you can build directly to a site using:

    grunt --target="D:\inetpub\mysite"

You can also watch for changes using:

    grunt watch
    grunt watch --target="D:\inetpub\mysite"

If you want to build the package file (into a pkg folder), use:

    grunt umbraco
