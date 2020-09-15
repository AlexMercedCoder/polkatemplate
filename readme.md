## Polka Template

#### by Alex Merced of AlexMercedCoder.com/devNursery.com

This Template...

- app object created and middleware assigned in config/app.js
- classics middleware is custom middleware I made to add a res.json and res.html function for sending json and html responses
- corsConfig objects in config/corsConfig will only be enabled in production environments, otherwise all traffic is allowed in.

```yaml
development:
  PORT: 4000
  SECRET: "production"

production:
  PORT: 3000
  SECRET: "development"
```

## Commands

`npm run dev` run dev server look for env.yaml for environmental variables

`npm run start` run in production mode, not look for env.yaml
