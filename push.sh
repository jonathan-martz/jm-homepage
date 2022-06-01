#!/bin/bash

docker build -t jomartz/homepage:v0.1 . --no-cache
docker image push jomartz/homepage:v0.1