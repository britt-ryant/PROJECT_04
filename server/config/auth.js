module.exports = {

    'facebookAuth' : {
        'clientID'      : '1525894984203482', // your App ID
        'clientSecret'  : '3a91a036e31e428681c00521882f6667', // your App Secret
        'callbackURL'   : 'http://localhost:3001/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

}
