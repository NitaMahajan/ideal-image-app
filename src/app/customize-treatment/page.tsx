import Header from "@/Components/UI/Header";
import '../../styles/scss/main.scss'; 
import CustomizeTreatment from "@/Components/UI/CustomizeTreatment";

// Render header and customize treatment page
export default function Component() {
    return (
      <main className='main'>
        <article style={{height: '100%'}}>
            <div className="container">
                <Header title={'Customize Treatment'}/>
                <CustomizeTreatment />
            </div>
        </article>
      </main>
    );
}
  

