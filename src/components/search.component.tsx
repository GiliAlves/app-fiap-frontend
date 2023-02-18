import { IonSearchbar } from '@ionic/react';
import './search.component.css';

function Searchbar(props: {placeholder: string, animated: boolean}) {
    return (
        <>
          <IonSearchbar
            animated={props.animated} 
            placeholder={props.placeholder}>
          </IonSearchbar>
        </>
    );
}
export default Searchbar;