#!/bin/bash


set -eu

echo "# Start deploy script..."

# Check argument
if [ $# -eq 0 ]; then
  echo "# Error: Missing argument. Usage: $0 [family|friends]"
  exit 1
fi

if [ "$1" != "family" ] && [ "$1" != "friends" ]; then
  echo "# Error: Argument must be 'family' or 'friends'"
  exit 1
fi

WEDDING_PART=$1

ENV_FILE="./infra/$WEDDING_PART.env"



# Load environment variables from .env file
echo "# Deploying part: $WEDDING_PART. Load env file: $ENV_FILE"

if [ ! -f "$ENV_FILE" ]; then
  echo "# Error: Env file $ENV_FILE not found!"
  exit 1
fi

set -a
. "$ENV_FILE"
set +a

DEPLOY_URL="$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH"

echo "# Deploying to: $DEPLOY_URL ..."

# Build the project
echo "# Building project..."
dotenvx run -e $ENV_FILE -- pnpm run build

# Check if source directory exists
if [ ! -d "dist" ]; then
  echo "Error: dist directory not found!"
  exit 1
fi

# Sync all files from dist directory to remote server
echo "# Syncing files to remote server..."
rsync -avz --delete ./dist/ $DEPLOY_URL
rsync -avz $ENV_FILE $DEPLOY_URL/.env

echo "# Deployment completed successfully!"
