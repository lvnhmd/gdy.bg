#!/bin/bash
sls deploy --noDeploy && node processtemplate.js && cp .serverless/gdybg-api.zip build/gdybg-api.zip