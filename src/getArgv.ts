import { ogsPvAIs, rootOptionsDefaults } from "./constants";
import * as yargs from "yargs";

export function getArgv() {
    yargs
        // 1) ROOT OPTIONS
        .usage(
            "Usage: $0 --username <bot-username> --apikey <apikey> [gtp2ogs arguments] -- botcommand [bot arguments]",
        )
        .demand("username")
        .demand("apikey")
        .describe("username", "Specify the username of the bot, for example GnuGo")
        .describe("apikey", "Specify the API key for the bot")
        .describe(
            "minMoveTime",
            "Specify the minimum move time in milliseconds. Bots that move faster than this will have an artificial delay added before submitting the move to slow the game down.",
        )
        .describe(
            "greeting",
            "Greeting message to appear in chat at first move (ex: Hello, have a nice game)",
        )
        .string("greeting")
        .describe("greetingbotcommand", `Additional greeting message displaying bot command`)
        .describe(
            "farewell",
            "Thank you message to appear in chat at end of game (ex: Thank you for playing)",
        )
        .string("farewell")
        .describe("farewellscore", "Send the score according to the bot at the end of the game")
        .describe("rejectnew", "Reject all new challenges with the default reject message")
        .describe(
            "rejectnewmsg",
            "Adds a customized reject message included in quote yourmessage quote",
        )
        .default("rejectnewmsg", rootOptionsDefaults.rejectnewmsg)
        .describe(
            "rejectnewfile",
            "Reject new challenges if file (ex: rejectnew.status, rejectnew-file.txt, etc.) exists at specified location. Location can either be absolute (ex: ~/ or /home/myUsername/) or relative for relative paths, it is relative to your current shell path (ex: if your shell is in ~/ and your rejectnew file is in ~/gtp2ogs/rejectnewfiles, do ./gtp2ogs/rejectnewfiles/rejectnew-file.txt, ex2: if your shell is in ~/gtp2ogs_logs and your rejectnewfile is in ~/gtp2ogs_rejectnewfiles/, do ../gtp2ogs_rejectnewfiles/rejectnew-file.txt",
        )
        .describe("debug", "Output GTP command and responses from your Go engine")
        .describe(
            "ogspv",
            `Send winrate and variations for supported AIs (${ogsPvAIs.join(
                ", ",
            )})with supported settings`,
        )
        .string("ogspv")
        .describe(
            "aichat",
            "Allow bots to send chat messages using `DISCUSSION:` `MALKOVICH:` in stderr",
        )
        .describe(
            "logfile",
            "In addition to logging to the console, also log gtp2ogs output to a text file. Filename argument is optional (using only --logfile will use default filename based on start date and time, for example gtp2ogs-logfile-2020-05-21T21-40-22-910Z)",
        )
        .string("logfile")
        .describe("json", "Send and receive GTP commands in a JSON encoded format")
        .describe("beta", "Connect to the beta server (sets ggs/rest hosts to the beta server)")
        .describe("host", "OGS Host to connect to")
        .default("host", rootOptionsDefaults.host) // default to OGS. If --beta, host will switch to beta OGS automatically
        .describe("port", "OGS Port to connect to")
        .default("port", rootOptionsDefaults.port)
        .describe("insecure", "Do not use ssl to connect to the ggs/rest servers")
        .describe(
            "hidden",
            "Hides the botname from the OGS game -Play against computer- bot list (but it can still accept challenges)",
        )
        .describe("startupbuffer", "Subtract this many seconds from time available on first move")
        .default("startupbuffer", rootOptionsDefaults.startupbuffer)
        .describe("timeout", "Disconnect from a game after this many seconds (if set)")
        .default("timeout", rootOptionsDefaults.timeout)
        .describe(
            "showboard",
            "Set this if bot understands the showboard GTP command, and if you want to display the showboard output",
        )
        .describe("persist", "Bot process remains running between moves")
        .describe(
            "persistnoncorr",
            "Bot process remains running between moves, except for correspondence games where bot is always killed",
        )
        .describe("noclock", "Do not send any clock/time data to the bot")
        .describe("corrqueue", "Process correspondence games one at a time")
        /* note: for maxconnectedgames, correspondence games are currently included
        /  in the maxconnectedgames count if you use `--persist` )*/
        .describe("maxconnectedgames", "Maximum number of connected games for all users")
        .default("maxconnectedgames", rootOptionsDefaults.maxconnectedgames)
        .describe(
            "maxconnectedgamesperuser",
            "Maximum number of connected games per user against this bot",
        )
        .default("maxconnectedgamesperuser", rootOptionsDefaults.maxconnectedgamesperuser)
        .describe("rankedonly", "Only accept ranked matches")
        .describe("unrankedonly", "Only accept unranked matches")
        // 2) OPTIONS TO CHECK RANKED/UNRANKED CHALLENGES
        //     2A) ALL/RANKED/UNRANKED
        .describe("bans", "Comma separated list of usernames or IDs")
        .string("bans")
        .describe(
            "bansranked",
            "Comma separated list of usernames or IDs who are banned from ranked games",
        )
        .string("bansranked")
        .describe(
            "bansunranked",
            "Comma separated list of usernames or IDs who are banned from unranked games",
        )
        .string("bansunranked")
        //     2B) GENERAL/RANKED/UNRANKED
        //         2B1) ALLOWED GROUP
        .describe("boardsizes", "Board size(s) to accept")
        .string("boardsizes")
        .describe("boardsizesranked", "Board size(s) to accept for ranked games")
        .string("boardsizesranked")
        .describe("boardsizesunranked", "Board size(s) to accept for unranked games")
        .string("boardsizesunranked")
        .describe("komis", "Allowed komi values")
        .string("komis")
        .describe("komisranked", "Allowed komi values for ranked games")
        .string("komisranked")
        .describe("komisunranked", "Allowed komi values for unranked games")
        .string("komisunranked")
        .describe("speeds", "Game speed(s) to accept")
        .describe("speedsranked", "Game speed(s) to accept for ranked games")
        .describe("speedsunranked", "Game speed(s) to accept for unranked games")
        .describe("timecontrols", "Time control(s) to accept")
        .describe("timecontrolsranked", "Time control(s) to accept for ranked games")
        .describe("timecontrolsunranked", "Time control(s) to accept for unranked games")
        //         2B2) GENERIC GENERAL/RANKED/UNRANKED
        .describe("proonly", "For all games, only accept those from professionals")
        .describe("proonlyranked", "For ranked games, only accept those from professionals")
        .describe("proonlyunranked", "For unranked games, only accept those from professionals")
        .describe("noprovisional", "Do not accept challenges from provisional players")
        .describe(
            "noprovisionalranked",
            "Do not accept challenges from provisional players for ranked games",
        )
        .describe(
            "noprovisionalunranked",
            "Do not accept challenges from provisional players for unranked games",
        )
        /* note: - nopause disables pausing DURING games, (game.js), but
        /        - nopauseonweekends rejects challenges BEFORE games (connection.js)
        /          (only for correspondence games)*/
        .describe("nopause", "Disable pausing during games")
        .describe("nopauseranked", "Disable pausing during ranked games")
        .describe("nopauseunranked", "Disable pausing during unranked games")
        .describe(
            "nopauseonweekends",
            "Do not accept matches that come with the option -pauses in weekends- (specific to correspondence games)",
        )
        .describe(
            "nopauseonweekendsranked",
            "Do not accept ranked matches that come with the option -pauses in weekends- (specific to correspondence games)",
        )
        .describe(
            "nopauseonweekendsunranked",
            "Do not accept unranked matches that come with the option -pauses in weekends- (specific to correspondence games)",
        )
        .describe("noautohandicap", "Do not allow handicap to be set to -automatic-")
        .describe(
            "noautohandicapranked",
            "Do not allow handicap to be set to -automatic- for ranked games",
        )
        .describe(
            "noautohandicapunranked",
            "Do not allow handicap to be set to -automatic- for unranked games",
        )
        .describe("minrank", "Minimum opponent rank to accept (ex: 15k)")
        .string("minrank")
        .describe("minrankranked", "Minimum opponent rank to accept for ranked games (ex: 15k)")
        .string("minrankranked")
        .describe("minrankunranked", "Minimum opponent rank to accept for unranked games (ex: 15k)")
        .string("minrankunranked")
        .describe("maxrank", "Maximum opponent rank to accept (ex: 1d)")
        .string("maxrank")
        .describe("maxrankranked", "Maximum opponent rank to accept for ranked games (ex: 1d)")
        .string("maxrankranked")
        .describe("maxrankunranked", "Maximum opponent rank to accept for unranked games(ex: 1d)")
        .string("maxrank")
        .describe("minhandicap", "Minimum handicap to accept")
        .describe("maxhandicap", "Maximum handicap to accept")
        .describe("minhandicapranked", "Minimum handicap to accept for ranked games")
        .describe("maxhandicapranked", "Maximum handicap to accept for ranked games")
        .describe("minhandicapunranked", "Minimum handicap to accept for unranked games")
        .describe("maxhandicapunranked", "Maximum handicap to accept for unranked games")
        .describe("minmaintimeblitz", "Minimum seconds of main time for blitz games")
        .describe("maxmaintimeblitz", "Maximum seconds of main time for blitz games")
        .describe("minmaintimeblitzranked", "Minimum seconds of main time for blitz ranked games")
        .describe("maxmaintimeblitzranked", "Maximum seconds of main time for blitz ranked games")
        .describe(
            "minmaintimeblitzunranked",
            "Minimum seconds of main time for blitz unranked games",
        )
        .describe(
            "maxmaintimeblitzunranked",
            "Maximum seconds of main time for blitz unranked games",
        )
        .describe("minmaintimelive", "Minimum seconds of main time for live games")
        .describe("maxmaintimelive", "Maximum seconds of main time for live ranked games")
        .describe("minmaintimeliveranked", "Minimum seconds of main time for live ranked games")
        .describe("maxmaintimeliveranked", "Maximum seconds of main time for live ranked games")
        .describe("minmaintimeliveunranked", "Minimum seconds of main time for live unranked games")
        .describe("maxmaintimeliveunranked", "Maximum seconds of main time for live unranked games")
        .describe("minmaintimecorr", "Minimum seconds of main time for correspondence games")
        .describe("maxmaintimecorr", "Maximum seconds of main time for correspondence games")
        .describe(
            "minmaintimecorrranked",
            "Minimum seconds of main time for correspondence ranked games",
        )
        .describe(
            "maxmaintimecorrranked",
            "Maximum seconds of main time for correspondence ranked games",
        )
        .describe(
            "minmaintimecorrunranked",
            "Minimum seconds of main time for correspondence unranked games",
        )
        .describe(
            "maxmaintimecorrunranked",
            "Maximum seconds of main time for correspondence unranked games",
        )
        .describe("minperiodsblitz", "Minimum number of periods for blitz games")
        .describe("minperiodsblitzranked", "Minimum number of periods for blitz ranked games")
        .describe("minperiodsblitzunranked", "Minimum number of periods for blitz unranked games")
        .describe("maxperiodsblitz", "Maximum number of periods for blitz games")
        .describe("maxperiodsblitzranked", "Maximum number of periods for blitz ranked games")
        .describe("maxperiodsblitzunranked", "Maximum number of periods for blitz unranked games")
        .describe("minperiodslive", "Minimum number of periods for live games")
        .describe("minperiodsliveranked", "Minimum number of periods for live ranked games")
        .describe("minperiodsliveunranked", "Minimum number of periods for live unranked games")
        .describe("maxperiodslive", "Maximum number of periods for live games")
        .describe("maxperiodsliveranked", "Maximum number of periods for live ranked games")
        .describe("maxperiodsliveunranked", "Maximum number of periods for live unranked games")
        .describe("minperiodscorr", "Minimum number of periods for correspondence games")
        .describe(
            "minperiodscorrranked",
            "Minimum number of periods for correspondence ranked games",
        )
        .describe(
            "minperiodscorrunranked",
            "Minimum number of periods for correspondence unranked games",
        )
        .describe("maxperiodscorr", "Maximum number of periods for correspondence games")
        .describe(
            "maxperiodscorrranked",
            "Maximum number of periods for correspondence ranked games",
        )
        .describe(
            "maxperiodscorrunranked",
            "Maximum number of periods for correspondence unranked games",
        )
        .describe("minperiodtimeblitz", "Minimum seconds of period time for blitz games")
        .describe("maxperiodtimeblitz", "Maximum seconds of period time for blitz games")
        .describe(
            "minperiodtimeblitzranked",
            "Minimum seconds of period time for blitz ranked games",
        )
        .describe(
            "maxperiodtimeblitzranked",
            "Maximum seconds of period time for blitz ranked games",
        )
        .describe(
            "minperiodtimeblitzunranked",
            "Minimum seconds of period time for blitz unranked games",
        )
        .describe(
            "maxperiodtimeblitzunranked",
            "Maximum seconds of period time for blitz unranked games",
        )
        .describe("minperiodtimelive", "Minimum seconds of period time for live games")
        .describe("maxperiodtimelive", "Maximum seconds of period time for live games")
        .describe("minperiodtimeliveranked", "Minimum seconds of period time for live ranked games")
        .describe("maxperiodtimeliveranked", "Maximum seconds of period time for live ranked games")
        .describe(
            "minperiodtimeliveunranked",
            "Minimum seconds of period time for live unranked games",
        )
        .describe(
            "maxperiodtimeliveunranked",
            "Maximum seconds of period time for live unranked games",
        )
        .describe("minperiodtimecorr", "Minimum seconds of period time for correspondence games")
        .describe("maxperiodtimecorr", "Maximum seconds of period time for correspondence games")
        .describe(
            "minperiodtimecorrranked",
            "Minimum seconds of period time for correspondence ranked games",
        )
        .describe(
            "maxperiodtimecorrranked",
            "Maximum seconds of period time for correspondence ranked games",
        )
        .describe(
            "minperiodtimecorrunranked",
            "Minimum seconds of period time for correspondence unranked games",
        )
        .describe(
            "maxperiodtimecorrunranked",
            "Maximum seconds of period time for correspondence unranked games",
        );
    return yargs.argv;
}
