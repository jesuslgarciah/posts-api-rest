#!/bin/bash entrypoint.sh
npx sequelize "db:migrate"
npx sequelize "db:seed:all"
npm run dev