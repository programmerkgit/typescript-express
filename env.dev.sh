#!/usr/bin/env bash
export SESSION_DB_HOST=127.0.0.1
export SESSION_DB_PASS=""
export SESSION_DB_USER=root
export SESSION_DB_PORT=3306
export SESSION_DB_DATABASE=demo_dev
export MYSQL_HOST=127.0.0.1
export MYSQL_PASS=""
export MYSQL_USER=root
export MYSQL_PORT=3306
export MYSQL_DATABASE=demo_dev
export CORS_ORIGIN="http://localhost:4200"

echo "run $1"
eval $1
