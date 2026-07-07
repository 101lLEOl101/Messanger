#!/bin/sh
set -e
npm run prisma:deploy
exec node backend/dist/index.js