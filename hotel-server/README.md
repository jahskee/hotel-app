## Hotel Reservation Back-End

#### GraphQL Server
    Live server for the project:
    
    http://kickstartapps.us:4000/graphql
    
    
#### REST Support Requirement    

    * Find all reservations
    http://kickstartapps.us:4000/api/reservations
    
    * Find reservation by Id
    http://kickstartapps.us:4000/api/reservation/5c4b837e4001a326f882b2b5
    http://kickstartapps.us:4000/api/reservation/5c4b98ee4001a326f882b2b8
    
    * Add and update reservation
    http://kickstartapps.us:4000/api/reservation
    
     If _id is undefined add, else update
     samplePostData = {
            _id: 'any' . 
            name: 'jaizon',
            phone: '5432222',
            email: 'jay@y.com',
            hotel: 'hotel1',
            address: 'address',
            arrival: 'arrival',
            departure: 'departure',
            totalAmount: 1080
     }


#### Installation 

    git clone https://github.com/jahskee/graphql-hilton
    npm install
    npm start
    
#### Video about the project
   https://youtu.be/6pam9P3fpTc
   [![Alt text](https://i.imgur.com/pVByW80.png)](https://youtu.be/6pam9P3fpTc)
   
#### Screenshot

   ![alt text](https://i.imgur.com/XkRWZyx.png)

   
#### OS Level environment variables must be set before starting the server.
   
    MONGODB_CONNECTION, NODE_ENV
    
    
#### Related Project in React Native  
    
    https://github.com/jahskee/react-native-hilton
    

  
    Thank you so much.    
    
    Sincerely yours,
    Jaizon Lubaton