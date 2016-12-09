# Family Feud Skill for Alexa

## Setup

Assuming you already have an AWS account and an Alexa developer account.

If you don't already have node installed:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
source ~/.bashrc # or start a new terminal session
command -v nvm # to verify nvm was setup
nvm install v4.3.2
nvm alias default v4.3.2
```

Create the following:
* In AWS, a lambda function named FamilyFeud in us-east-1
* Alexa Skill to call the lambda function

Install [aws-cli](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)

Configure a profile called `ff` with credentials to update the lambda function.

## Developing

To build and upload the skill, run `npm start`

To cleanup the dist directory, run `npm run clean`
