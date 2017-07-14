#!/bin/bash
sls deploy --noDeploy && node processtemplate.js && cp .serverless/swagbag-club.zip build/swagbag-club.zip