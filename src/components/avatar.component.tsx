import { IonAvatar } from '@ionic/react';
import './avatar.component.css';
function Avatar(props: {slot: string, alt: string, src: string, class: string}) {    
    return (
        <>
        <IonAvatar slot={props.slot} class={props.class}>
            <img alt={props.alt} src={props.src} />
        </IonAvatar>
        </>
    );
}
export default Avatar;