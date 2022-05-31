# Actions on Google: Snow Pal Interactive Canvas Sample

*:warning: Warning: Conversational Actions will be deprecated on June 13, 2023. For more information, see [Conversational Actions Sunset](https://goo.gle/ca-sunset).*


These samples serves as the source code for the [Actions on Google Interactive Canvas codelab](https://codelabs.developers.google.com/?cat=Assistant).
The `start` directory should be used as a starting point for the codelab.
The `complete` directory can be used as a reference for the completed implementation of the codelab.

For detailed instructions on using this code, refer to the
[Actions on Google Interactive Canvas codelab](https://codelabs.developers.google.com/?cat=Assistant).
The following steps explain how to deploy the code found in the `start` directory.

### Prerequisites
1. Node.js and NPM
    + We recommend installing using [nvm for Linux/Mac](https://github.com/creationix/nvm) and [nvm-windows for Windows](https://github.com/coreybutler/nvm-windows)
1. Install the [Firebase CLI](https://developers.google.com/assistant/actions/dialogflow/deploy-fulfillment)
    + We recommend using MAJOR version `8` , `npm install -g firebase-tools@^8.0.0`
    + Run `firebase login` with your Google account

### Setup
#### Actions Console
1. From the [Actions on Google Console](https://console.actions.google.com/), **New project** > **Create project** > under **What kind of Action do you want to build?** > **Game** > **Blank project for smart display**

#### Firebase Hosting Deployment
1. Run `firebase deploy --project {PROJECT_ID} --only hosting` to deploy the web app to Firebase Hosting
   + To find your Project ID: In the Actions Console console for your project, navigate to ⋮ > Project settings > Project ID.

#### Actions CLI
1. Install the [Actions CLI](https://developers.google.com/assistant/actionssdk/gactions)
1. Navigate to `sdk/settings/settings.yaml`, and replace `<PROJECT_ID>` with your project ID
1. Navigate to `sdk/custom/global/actions.intent.MAIN.yaml`, and replace `<PROJECT_ID>` with your project ID
1. Navigate to `sdk/custom/global/actions.intent.PLAY_GAME.yaml`, and replace `<PROJECT_ID>` with your project ID
1. Run `gactions login` to login to your account.
1. Run `gactions push` to push your project.
1. Run `gactions deploy preview` to deploy your project.

### Running this Sample
+ You can test your Action on any Google Assistant-enabled device on which the Assistant is signed into the same account used to create this project. Just say or type, “OK Google, talk to my test app”.
+ You can also use the Actions on Google Console simulator to test most features and preview on-device behavior.

## References & Issues
+ Questions? Go to [StackOverflow](https://stackoverflow.com/questions/tagged/actions-on-google) or the [Assistant Developer Community on Reddit](https://www.reddit.com/r/GoogleAssistantDev/).
+ For bugs, please report an issue on Github.
+ Actions on Google [Documentation](https://developers.google.com/assistant)
+ Actions on Google [Codelabs](https://codelabs.developers.google.com/?cat=Assistant)

## Contributing
Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md).

## License
See [LICENSE](LICENSE).
