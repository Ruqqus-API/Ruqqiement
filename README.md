# Ruqqiement

A tool to analyze Ruqqus comment sentiment with Google Cloud's natural language processing

## Setup and Running

1. Create a `.env` file with the following:
```
ID=your-id
TOKEN=your-access-token
REFRESH=your-refresh-token
```

Don't know where to get these? Get the first two at https://ruqqus.com/settings/apps, then the beautiful refresh token here: https://ruqqus-auth.glitch.me/

Note: To make the refresh token, be sure to put their redirect URI in your app settings (first link)

2. `yarn install`
3. `yarn start`

If you do not have the Google Cloud API credentials set up on your local machine, follow the error logs for guidance to set it up. Takes about 5 minutes.

## Output and graphing

Pipe the output to a file and copy-paste it into Google Sheets