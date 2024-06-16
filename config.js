// Define the Google Analytics ID
const googleAnalyticsId = 'YOUR_GOOGLE_ANALYTICS_ID';

// Load the Google Analytics script dynamically
(function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);

    script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', googleAnalyticsId);
    };
})();

// Define the URL map and logos based on IDs
const urlMap = {
    '1': { url: 'https://hisham.cc/', logo: 'https://www.gravatar.com/avatar/8ac7de375b1816679c3095f475f3a7f8.png', name: 'Blog' },
    '2': { url: 'https://hmb.capital', logo: 'https://via.placeholder.com/100?text=Logo2', name: 'HMB Capital' },
    '3': { url: 'https://github.com/mardambey/', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', name: 'GitHub' },
    '4': { url: 'https://linkedin.com/in/hishammardambey', logo: 'https://media.licdn.com/dms/image/C4E03AQEK--mPgGsg4w/profile-displayphoto-shrink_800_800/0/1582474785120?e=1724284800&v=beta&t=qHcBK8q7GDCUjkPBVcWsa9F7OXG3AkU0nKv24861LY8', name: 'LinkedIn' },                
    // Add more mappings as needed
};

// Define the title and blurb
const gridTitle = "Hisham's Links";
const gridBlurb = 'Welcome to my link directory. Please choose a link to go to or use the email address below to reach me.';
