const config = {
	ownerID: ['848917797501141052'],
	token: '',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: {
			clientID: 'w68c5aw4xrebhdy0590div958uek8h',
			clientSecret: 'yof3y1kk323z4pgqrlouws36p3banw',
		},
		// https://fortnitetracker.com/site-api
		fortnite: '36515f5b-d411-4472-a999-35a7dcea3446',
		// https://steamcommunity.com/dev
		steam: '5FE997076B023529B1BEC52DF7B0EC2B',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: 'a4e2e9cca2254f06a5154b86365b2eb4',
			secret: '801515d1056f4cebab2fcea85912aba3',
		},
		// Your Ubisoft email and password (You don't need to enable anything)
		rainbow: {
			email: 'markungphim@gmail.com',
			password: '!Eileenschatz06',
		},
		// https://genius.com/developers
		genuis: 'ie8Plkj-G24l4UqDEj_u8az8n8Q3Cc8ZFbgZ7yVpBO4n5xGPX78iweYTTWxIMT8z',
		// https://api.amethyste.moe/
		amethyste: '6e2c87a9696638a61b2f81a3b0fce4b73e729c95fd0051345895bd55f7d088d68d63802814d40b9de35ecdb125220e33e288d269a829f40165eff06d00417af9',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'https://mikurelease.herokuapp.com/',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://dsc.gg/infinity-support',
		// Your support's server ID
		GuildID: '857622993702486067',
		// This for using the suggestion command on your server
		ModRole: '857627596828180531',
		// What channel to post the suggestions
		SuggestionChannel: '911943116146221126',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '857625013267202068',
	},
	// URL to mongodb
	MongoDBURl: 'mongodb+srv://SkyBlue:!Markung2547@infinity.swxul.mongodb.net/test',
	// embed colour
	embedColor: 'RANDOM',
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};

module.exports = config;
