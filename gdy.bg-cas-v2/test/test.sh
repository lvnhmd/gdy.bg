#!/bin/bash
# My first script

# export ConfigGetAddressAPIKey=u1SOlKvom0u3Wk0X_KwxIQ6266 && \
# # export ConfigFlytAPIKey=83b0d5a1acc84c5fb79efd9c55488548 && \
# # export ConfigFlytURL=http://gateway.sbx.flypaythis.com/ && \
# export ConfigFlytAPIKey=ffb8327b1a194ad28c814e1dfcfa9af9 && \
# export ConfigFlytURL=http://gateway.sbx.flypaythis.com/ && \
# export DynamoDBUserSessionsName=usersessions && \
# export DynamoDBProductInformationName=productinformations && \
# export ConfigGetAddressAPIURL=https://api.getaddress.io/v2/uk/ && \
# # export ConfigIDPURL=https://idp.nandos.co.uk/ && \
# # export ConfigIDPClientID=3_25vhd5pde3vo048s0oow84sscc4w4o4g88s4o0k88cksoo8kco && \
# # export ConfigIDPClientSecret=4pwi9tp6o54w48g0csw0wk4408ccs8w0wwwckcc8cwksso40gw && \
# export ConfigIDPURL=https://pre-prod-idp.nandos.co.uk/ && \
# export ConfigIDPClientID=3_25vhd5pde3vo048s0oow84sscc4w4o4g88s4o0k88cksoo8kco && \
# export ConfigIDPClientSecret=4pwi9tp6o54w48g0csw0wk4408ccs8w0wwwckcc8cwksso40gw && \
# echo '---------------------------TEST createSession---------------------------' && \
# lambda-local -f user/createSession.js 
#&& \
# echo '---------------------------TEST getLoggedInUser---------------------------' && \
# lambda-local -f user/getLoggedInUser.js -e events/user/getLoggedInUserEventSuccess.json 
#&& \
# echo '---------------------------TEST changePassword---------------------------' && \
# lambda-local -f user/changePassword.js -e events/user/changePasswordEventSuccess.json 
# echo '---------------------------TEST sendPasswordReset---------------------------' && \
# lambda-local -f user/sendPasswordReset.js -e events/user/sendPasswordResetEventSuccess.json 
# echo '---------------------------TEST resetPassword---------------------------' && \
# lambda-local -f user/resetPassword.js -e events/user/resetPasswordEventSuccess.json && \
# echo '---------------------------TEST endSession---------------------------' && \
# lambda-local -f user/endSession.js -e events/user/endSessionEventSuccess.json 
# echo '---------------------------TEST register---------------------------' && \
# lambda-local -f user/register.js -e events/user/registerEventSuccess.json 
# && \
# echo '---------------------------TEST get getLocation---------------------------' && \
# lambda-local -f location/getLocation.js -e events/location/getLocationEventSuccess.json 
# && \
# echo '---------------------------TEST get getActiveOrders---------------------------' && \
# lambda-local -f bill/getActiveOrders.js -e events/bill/getActiveOrdersEventSuccess.json&& \
# echo '---------------------------TEST get getOrderDetail---------------------------' && \
# lambda-local -f bill/getOrderDetail.js -e events/bill/getOrderDetailEventSuccess.json&& \
# echo '---------------------------TEST get getOrderSubscription---------------------------' && \
# lambda-local -f bill/getOrderSubscription.js -e events/bill/getOrderSubscriptionEventSuccess.json
# echo '---------------------------TEST SessionAuthorizer ---------------------------' && \
# lambda-local -f user/SessionAuthorizer.js -e events/user/SessionAuthorizerEventSuccess.json && \
# echo '---------------------------TEST getCustomerAddresses---------------------------' && \
# lambda-local -f user/getCustomerAddresses.js -e events/user/getCustomerAddressesEventSuccess.json && \
# echo '---------------------------TEST updateAddress---------------------------' && \
# lambda-local -f user/updateAddress.js -e events/user/updateAddressEventSuccess.json 
# && \
# echo '---------------------------TEST pusherAuth---------------------------' && \
# lambda-local -f pusher/pusherAuth.js -e events/pusher/pusherAuthEventSuccess.json 
# && \
# echo '---------------------------TEST postUser---------------------------' && \
# lambda-local -f user/postUser.js -e events/user/postUserEventSuccess.json && \
# echo '---------------------------TEST postUser---------------------------' && \
# lambda-local -f user/removeAddress.js -e events/user/removeAddressEventSuccess.json
# echo '---------------------------TEST removeCard---------------------------' && \
# lambda-local -f user/removeCard.js -e events/user/removeCardEventSuccess.json && \
echo '---------------------------TEST crawl---------------------------' && \
# lambda-local -f testCrawl.js -e events/crawlEvent.json 
lambda-local -l ../swagbag.club-crawler/crawler.js -h ../swagbag.club-crawler/handler.js -e events/crawlEvent.json

# && \
# echo '---------------------------TEST postOrder---------------------------' && \
# lambda-local -f basket/postOrder.js -e events/basket/postOrderEventSuccess.json 
# && \
# echo '---------------------------TEST provisionPayment---------------------------' && \
# lambda-local -f payment/provisionPayment.js -e events/payment/provisionPaymentEventSuccess.json
# echo '---------------------------TEST makePayment---------------------------' && \
# lambda-local -f payment/makePayment.js -e events/payment/makePaymentEventSuccess.json
# echo '---------------------------TEST getAddresses---------------------------' && \
# lambda-local -f address/getAddresses.js -e events/address/getAddressesEventSuccess.json
# echo '---------------------------TEST importProductInformation---------------------------' && \
# lambda-local -f utils/importProductInformation.js 