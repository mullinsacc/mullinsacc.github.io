(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // Call this whenever information about your visitors becomes available
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id:             "{{user_id}}",   // Required if user is logged in
                email:        user_email, // Recommended if using Pendo Feedback, or NPS Email
                full_name:    user_full_name, // Recommended if using Pendo Feedback
                //role:         user_role,
                account_access:  user_account_access,
                account_creation_date: user_account_creation_date,
                class: user_random_data,
                current_account_id: user_current_account_id,
                current_parent_account_id: user_current_parent_account_id,
                trial_start_date: user_trial_start_date,
                conversion_date: user_conversion_date

                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },

            account: {
                id:           user_account_id, // Highly recommended
                account_tier:    user_account_tier,
                name:         user_account_id,
                is_paying:    user_is_paying,
                monthly_value:user_acct_value
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional

                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            }
      //    location: {
      //        transforms:[
      //          {
      //              'attr': 'pathname',
      //              'action': 'Replace',
      //              'data': 'buttons/components',
      //          }]}
        });
})('75a22ada-a24c-4f90-72af-21f71d9577ce');
