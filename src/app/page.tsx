// Main page

import ServicePage from '@/Components/UI/ServicePage';
import '../styles/scss/main.scss'; 

export default function Home() {
  return (
    <main className='main'>
      <article style={{height: '100%'}}>
        <ServicePage />
      </article>
    </main>
  ); 
}
