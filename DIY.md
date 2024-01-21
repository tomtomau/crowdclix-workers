# DIY

This doc is supposed to help with if you'd like to set up another repository like this for yourself.

## Cloudflare

Signup to Cloudflare: https://www.cloudflare.com/

It seems to have a pretty generous tier for hobby scale projects 🚀. 

We are using Cloudflare "workers". These are "serverless" functions - which means we're not paying for servers when 
our application is not being used. In fact - we get like 10,000 free request per month or something which is pretty 
sick!

## Setting up new Cloudflare workers

Cloudflare has great documentation on how to setup Cloudflare workers:

https://developers.cloudflare.com/workers/get-started/guide/

## Deploying

The above links from Cloudflare have instructions on deployments,
but it's _very_ achievable to run your project in prod 🚀