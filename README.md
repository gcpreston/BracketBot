# BracketBot
Discord bot for providing the latest Challonge bracket from a specified page. Requires username and API token from page to fetch bracket for. Type "!bracket" for the latest bracket.

To use, a `config.json` file must be created in the root directory with the following format:

```json
{
    "discordToken": "DISCORD_API_TOKEN_HERE",
    "challongeUsername": "CHALLONGE_USERNAME_HERE",
    "challongeToken"  : "CHALLONGE_API_TOKEN_HERE"
}
```
