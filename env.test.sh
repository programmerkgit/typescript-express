#!/usr/bin/env bash
export NODE_ENV=test
export MYSQL_DATABASE=demo
echo "run $1"
eval $1
