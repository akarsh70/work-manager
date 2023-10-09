import { useClient } from 'react-interactions';
import TestimonialSection from '@/components/homepage/testimonial'; // Import your TestimonialSection component

function MyApp({ Component, pageProps }) {
    useClient(); // Mark this component as the client entry point
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
