# Cloudflare Workers Deployment Guide

This document explains how to set up and troubleshoot automated deployments to Cloudflare Workers for the BSides SWFL 2025 website.

## Overview

The project uses GitHub Actions to automatically deploy the Next.js application to Cloudflare Workers whenever changes are pushed to the `main` branch. The deployment is handled by the `opennextjs-cloudflare` adapter.

## Prerequisites

To enable automated deployments, you need to configure two GitHub repository secrets:

1. **CLOUDFLARE_API_TOKEN** - API token with permissions to manage Workers
2. **CLOUDFLARE_ACCOUNT_ID** - Your Cloudflare account identifier

## Setup Instructions

### Step 1: Create a Cloudflare API Token

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Profile** → **API Tokens** or go directly to: https://dash.cloudflare.com/profile/api-tokens
3. Click **Create Token**
4. Choose one of these options:
   - **Option A**: Use the "Edit Cloudflare Workers" template
   - **Option B**: Create a custom token with these permissions:
     - Account → Workers Scripts → Edit
     - Account → Account Settings → Read
     - Zone → Workers Routes → Edit *(only if using custom domains)*
5. Set the account scope to include your account
6. Click **Continue to summary** → **Create Token**
7. **Copy the token immediately** - you won't be able to see it again!

> [!IMPORTANT]
> Store this token securely. You'll need it in Step 3.

### Step 2: Get Your Cloudflare Account ID

1. In your Cloudflare Dashboard, click on **Workers & Pages**
2. Your Account ID is displayed on the right side of the page
3. Alternatively, look at the URL when viewing any Worker:
   ```
   https://dash.cloudflare.com/YOUR_ACCOUNT_ID/workers/...
                              ^^^^^^^^^^^^^^^^
   ```
4. Copy your Account ID

### Step 3: Configure GitHub Repository Secrets

> [!WARNING]
> You must be a repository administrator to configure secrets.

1. Go to the repository settings: https://github.com/BSidesSWFL/BSides2025/settings/secrets/actions
2. Click **New repository secret**
3. Add the first secret:
   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Secret**: Paste the token from Step 1
   - Click **Add secret**
4. Add the second secret:
   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
   - **Secret**: Paste the account ID from Step 2
   - Click **Add secret**

### Step 4: Test the Deployment

1. Navigate to **Actions** → **Deploy to Cloudflare Workers (Simple)**
2. Click **Run workflow** → Select the `main` branch → **Run workflow**
3. Monitor the workflow execution
4. If successful, verify the deployment in your Cloudflare Workers dashboard

## How It Works

### Automatic Deployments

The workflow automatically triggers on:
- Any push to the `main` branch
- Manual workflow dispatch from the Actions tab

### Deployment Process

1. **Checkout code** - Gets the latest code from the repository
2. **Setup Node.js** - Installs Node.js 22 with npm caching
3. **Validate secrets** - Ensures required Cloudflare secrets are configured
4. **Install dependencies** - Runs `npm ci` to install packages
5. **Fix native dependencies** - Rebuilds platform-specific packages
6. **Build and deploy** - Runs `npm run deploy` which:
   - Builds the Next.js app
   - Bundles it for Cloudflare Workers using `@opennextjs/cloudflare`
   - Deploys to Cloudflare using Wrangler

## Troubleshooting

### Authentication Error (Code 10000)

**Error message:**
```
✘ [ERROR] Authentication error [code: 10000]
```

**Causes:**
- Cloudflare API token is not set in GitHub secrets
- API token lacks required permissions
- API token has expired or been revoked

**Solution:**
1. Verify both secrets are configured in GitHub
2. Check that the API token has the correct permissions (see Step 1)
3. If the token is old, create a new one and update the GitHub secret

### Missing Secrets

**Error message:**
```
❌ ERROR: CLOUDFLARE_API_TOKEN secret is not set
```

**Solution:**
Follow the setup instructions above to configure the missing secret.

### Build Failures

If the build succeeds but deployment fails, check:
1. Cloudflare Workers quotas (free tier limits)
2. Account ID is correct
3. Worker name doesn't conflict with existing workers

### Viewing Deployment Logs

1. Go to **Actions** in the GitHub repository
2. Click on the failed workflow run
3. Expand the "Build and deploy to Cloudflare Workers" step
4. Check the detailed logs for errors

## Local Development

To test deployments locally:

1. Create a `.dev.vars` file in the project root:
   ```bash
   CLOUDFLARE_API_TOKEN=your_token_here
   CLOUDFLARE_ACCOUNT_ID=your_account_id_here
   ```

2. Run the deployment command:
   ```bash
   npm run deploy
   ```

> [!NOTE]
> The `.dev.vars` file is gitignored to prevent accidentally committing secrets.

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [OpenNext.js Cloudflare Adapter](https://opennext.js.org/cloudflare)
- [Wrangler CLI Reference](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Support

If you continue to experience issues:
1. Check the [GitHub Actions workflow file](.github/workflows/deploy-simple.yml)
2. Review the [Wrangler configuration](wrangler.jsonc)
3. Consult the Cloudflare Workers dashboard for deployment status
4. Check Wrangler logs in the Actions output
