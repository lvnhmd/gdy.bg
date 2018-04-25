#!/bin/bash
# My first script

# export ConfigGetAddressAPIKey=u1SOlKvom0u3Wk0X_KwxIQ6266 && \
lambda-local -l ../handler.js -h crawl -e ./events/crawlEvent.json -t 30
