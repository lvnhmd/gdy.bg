/*
   Copyright 2010-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

   This file is licensed under the Apache License, Version 2.0 (the "License").
   You may not use this file except in compliance with the License. A copy of
   the License is located at

    http://aws.amazon.com/apache2.0/

   This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
   CONDITIONS OF ANY KIND, either express or implied. See the License for the
   specific language governing permissions and limitations under the License.
*/

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'eu-west-1' });

// Create sendBulkTemplatedEmail params 
// var params = {
//   Destinations: [ /* required */
//     {
//       Destination: { /* required */
//         ToAddresses: [
//           'elvin.ali@bigradical.com',
//           'ali.elvin@gmail.com'
//           /* more items */
//         ]
//       },
//       ReplacementTemplateData: '{ \"REPLACEMENT_TAG_NAME\":\"REPLACEMENT_VALUE\" }'
//   },
//   ],
//   Source: 'EMAIL_ADDRESS', /* required */
//   Template: 'TEMPLATE_NAME', /* required */
//   DefaultTemplateData: '{ \"REPLACEMENT_TAG_NAME\":\"REPLACEMENT_VALUE\" }',
//   ReplyToAddresses: [
//     'EMAIL_ADDRESS'
//   ]
// };


// Create createTemplate params 
var params = {
    Destinations: [ /* required */
        {
            Destination: { /* required */
                ToAddresses: [
                    'ali.elvin@gmail.com',
                    'elvin.ali@bigradical.com',
                ]
            }
            ,
            // ReplacementTags: [
            //     {
            //         Name: 'STRING_VALUE', /* required */
            //         Value: 'STRING_VALUE' /* required */
            //     },
            //     /* more items */
            // ],
            ReplacementTemplateData: "{ \"name\":\"Elvin\" }"
        },
        /* more items */
    ],
    Source: 'hello@swagbag.club', /* required */
    Template: 'swagbagclub-new', /* required */
    // ConfigurationSetName: 'STRING_VALUE',
    // DefaultTags: [
    //     {
    //         Name: 'STRING_VALUE', /* required */
    //         Value: 'STRING_VALUE' /* required */
    //     },
    //     /* more items */
    // ],
    DefaultTemplateData: '{ \"name\":\"stranger\" }',
    ReplyToAddresses: [
        'swagbag@swagbag.club',
        /* more items */
    ]
    // ,
    // ReturnPath: 'STRING_VALUE',
    // ReturnPathArn: 'STRING_VALUE',
    // SourceArn: 'STRING_VALUE',
    // TemplateArn: 'STRING_VALUE'
};

var ses = new AWS.SES({ apiVersion: '2010-12-01' });
ses.sendBulkTemplatedEmail(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});