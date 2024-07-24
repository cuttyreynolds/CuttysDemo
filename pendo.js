<script>
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // This function creates visitors and accounts in Pendo
        // You will need to replace <visitor-id-goes-here> and <account-id-goes-here> with values you use in your app
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id:              'VISITOR 01', // Required if user is logged in
                email:        'email@pendo.io', // Recommended if using Pendo Feedback, or NPS Email
                full_name:    'Leeroy Jenkins', // Recommended if using Pendo Feedback
                role:         'Professional Coolguy' // Optional

                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },

            account: {
                id:              'ACCOUNT 01', // Highly recommended, required if using Pendo Feedback
                name:         'Guild of Excellent Individuals', // Optional
                // is_paying:    // Recommended if using Pendo Feedback
                // monthly_value:// Recommended if using Pendo Feedback
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional
                favoriteCharacter: 'Bridget'

                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            }
        });
})('49a60ab6-2a04-4cd2-4127-1f6432ff4758');
</script>
