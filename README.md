eqFTP
=====

*My hands are sweaty! They stick to my table so I can't type! Donate for air conditioner! <3*

### [Help with translations!](https://github.com/Equals182/eqFTP/wiki/1.6-Frequently-Asked-Questions#how-can-i-translate-this-extension-to-language-of-my-people)

FTP integration for Brackets code editor.

Here's some features:

* FTP File Manager -- You can explore remote server
* Downloading -- On double click you can download file to edit
* Uploading -- You can upload files on save
* FTP Connection Manager -- You can manage all your connections in single window
* Queue -- You can queue lots of files and then upload them with one click.

This extension created on base of [Brackets FTP](https://github.com/theproducer/brackets-ftp). Actually I rewrote almost everything, but still. 
Inspired by Dreamweaver's FTP implementation. First you create new connection in manager, next you connect, download file, edit, save and it's uploads automatically.

It's really basic and I hope you'll enjoy this extension. [Click here for more information](https://github.com/Equals182/eqFTP/wiki)

## Please Note

This extenstion supports data encryption. To enable this feature check it in settings dialog. [Click here for more information](https://github.com/Equals182/eqFTP/wiki/1.1.-Setting-Up#store-passwords-safely).

**This extension is SO fresh so please use it carefully, and if you find a bug [create an issue now](https://github.com/Equals182/eqFTP/issues/new)**

## What's Next

Well first of all I'd like to say I did this extension because I needed it. I will add new features if I'll need them or if you will pull request them.

You can fork this stuff and change it however you want.

I'm thinking about this:

* SFTP -- well, this feature is dead now
* Sync -- like REAL sync (gotta figure it out)
* More UI integration
* Open only readable by Brackets files (extension)
* Auto-moving all projects from old default directory to new
* Creating, deleting and renaming files on remote server
* FTP panel resizing

## Some Links

- [Known Issues](https://github.com/Equals182/eqFTP/issues?state=open)
- [Troubleshooting](https://github.com/Equals182/eqFTP/wiki/1.5-Troubleshooting)
- [FAQ](https://github.com/Equals182/eqFTP/wiki/1.6-Frequently-Asked-Questions)

## Version History

>Please don't kick my ass for updating extension so often. I just want to fix every bug that was found.
>
>If I fix something critical I throw update on registry and for that I need to increase version number (I'm trying to follow [Semantic Versioning](http://semver.org/)). If update is too minor and it's not critical enough for extension work, I'll just wait till it get bigger or till weekends.

* version 0.5.0
 * Added resizing for FTP panel + fixed position
 * Fixed month in Modified Date
 * Added date formats
 * Remastered ftpDomain.js - stability, universal queue and more
 * Added Keep Alive feature
 * Added debug mode
 * Checking local paths for connections now doesn't require eqFTP password
 * Resizable columns in Queue
 * Added second mode for directory listing
 * Added Remove Queuer feature
* 0.4.3 (5/28/14)
 * Added French translation
 * Added Portuguese translation
 * Temporary removed Error Dialog on save when project isn't connected to server.

[See full history...](https://github.com/Equals182/eqFTP/wiki/1.7-Version-History)

## Contributors

* [Wikunia](https://github.com/Wikunia) -- translating (German), bugs finding, testing
* [mackenza](https://github.com/mackenza) -- bugs finding, testing
* [fmaida](https://github.com/fmaida) -- translating (Italian), donating
* Roger Reghin -- translating (Portuguese)
* [Tilotiti](https://github.com/Tilotiti) -- translating (French)
* [Anachron](https://github.com/Anachron) -- German translation improvements
* [topwebs](https://github.com/topwebs) -- bugs finding, testing
* [oytunyuksel](https://github.com/oytunyuksel) -- translating (Turkish)

## License

MIT-licensed -- see main.js for details.

## Voluntary Donations

This extension is totally free to use or edit because of license but if you **really** have tons of money and want to throw some dollars at me -- you're welcome! Use button below to give me moneyz for my work!

[![Donate! :3](https://pp.vk.me/c617327/v617327212/806b/DPUcVE7PTRQ.jpg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XNJ33D53AR9JJ)

$5 -- donated. $440 -- current goal (A/C).
