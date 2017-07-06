TODO

add G+

shortlist and mr hyde may duplicate each other 

paging 

caching

order by days to enter 

order by new 

>>> social login
https://stackoverflow.com/questions/39281303/how-to-change-index-route-depending-on-state

http://knowbody.github.io/react-router-docs/guides/NavigateOutsideComponents.html

https://www.thunderclap.it/

logo at the top to be swag bag

cache images - get them on scrape and persist them in s3

Facebook share fails if no image

move stuff to config - e.g competition_list_item.js <SocialShare shareUrl="https://swagbag.club” 
			          the site is using FB swagbag.club-localhost 1819960984999515 right now, let it use swagbag.club 1847976505469649

https://www.npmjs.com/package/react-facebook-login

function to expire competitions 

in order to be able to take advantage of https://aws.amazon.com/blogs/aws/new-manage-dynamodb-items-using-time-to-live-ttl/ , 
I propose the following change to nandos-delivery-backend:
1.Add attribute expiresAt to user session
2.When user session created , set expiresAt=createdAt+30 days
3.When/if user session authenticated , update expiresAt=updatedAt+20min
4.When user session accessed , update expiresAt=updatedAt+20min ( updatedAt is already updated )
5.Enable TTL on table usersessions using attribute expiresAt
6.Remove function clearSessions from nandos-delivery-utils completely