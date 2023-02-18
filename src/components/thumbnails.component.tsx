import { IonThumbnail } from '@ionic/react';
import './thumbnails.component.css';

function Thumbnail(props: {slot: string, alt: string, src: string}) {
    return (
        <>
        <IonThumbnail slot={props.slot}>
            <img alt={props.alt} src={props.src} />
        </IonThumbnail>
        </>
    );
}
export default Thumbnail;