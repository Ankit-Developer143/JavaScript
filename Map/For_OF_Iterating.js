const Value = new Map();
Value.set('Name', 'Ankit');
Value.set('Address', 'Laxmi nagar')


//take any variables
for (const [key, value] of Value) {
    console.log(key + '=' + value);

}/* op:- Name=Ankit
         Address=Laxmi nagar*/

//OR
for (const i of Value) {
    console.log(i);/* [ 'Name', 'Ankit' ]
                    [ 'Address', 'Laxmi nagar' ] */

}
