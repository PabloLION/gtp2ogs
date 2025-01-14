# gtp2ogs

[![Build Status](https://travis-ci.org/online-go/gtp2ogs.svg?branch=devel)](https://travis-ci.org/online-go/gtp2ogs)

Gtp2ogs is a tool allows all bots/AI that support
[GTP (Go Text Protocol)](https://senseis.xmp.net/?GoTextProtocol)
to communicate with [OGS (Online-Go.com Server)](https://online-go.com/)
and play games with players or other bots.

## Full tutorial

## Quick Installation Guide

You will need to install [Node.js](https://nodejs.org/) in order to use this tool

Once installed, simply run

`npm install -g gtp2ogs`

You can find operating system specific instructions below:

-   for Windows, see [the Windows Installation Guide](/docs/INSTALLATION-WINDOWS.md)
-   for Linux, see [the Linux Installation Guide](/docs/INSTALLATION-LINUX.md)

[wonderingabout](https://github.com/wonderingabout) has put together a more detailed
tutorialw ith screenshots and examples here: https://github.com/wonderingabout/gtp2ogs-tutorial

## Running a bot

Before you get started you'll need to setup a bot account on online-go.com. To do that, you'll
need to have your human account and create a new separate account for your bot account, then
contact a moderator to request that your bot account be flagged as a bot account. Give them
both your human account and your bot account. Once that has been done, log in with your human
account, search for your bot account to view the bot profile, on that page you'll be able to
generate an API key which you'll use to connect the bot.

Once you have your your bot account setup along with it's API key, you can connect your bot
using the following command:

```
gtp2ogs --username <yourusername> --apikey <yourapikey> -- path/to/your/ai/executable [bot arguments]
```

Additional options can be set before the `--` and are documented [here](/docs/OPTIONS-LIST.md):

## Beta OGS

If you'd like to connect your bot to the beta.online-go.com site simply follow all of the
previous steps for setting up a bot account on the beta site and use the `--beta` command
line argument.

## Show winrate and variations in games

gtp2ogs has native support for showing ingame winrate and variations for some AI,
see: [--ogspv](/docs/OPTIONS-LIST.md/#ogspv)

## Community Involvement

-   You may also use [Issues](https://github.com/online-go/gtp2ogs/issues)
    to report issues.
-   Contributing is most welcome, if you want to add features or submit fixes
    we'd be glad to review them with you and make gtp2ogs more awesome!
-   You may also be interested in joining the Discord chat:
    in leela zero's [#bots channel](https://discord.gg/HZ23Cp9)

This discord can also be useful if you want to have fast and quick,
interactive chat, or ask simple and quick questions, however github issues
are preferred for long problems because they leave a track that can be useful
later)

## Developer Notes

You can find notes for developers [here](/docs/DEV.md).
