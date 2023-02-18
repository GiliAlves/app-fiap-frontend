import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { arrowRedoOutline, chatboxEllipsesOutline, paperPlaneOutline, thumbsUpOutline } from 'ionicons/icons';
import Avatar from './avatar.component';
import './card-publicaction.component.css';

function CardPublicaction(props: { description: string, img: { alt: string, src: string }, user: { name: string, description: string, alt: string, src: string } }) {
    return (
        <IonCard className="card-publication">
            <IonGrid class="pdt-30">
                <IonRow>
                    <IonCol size="auto" class="flex-center">
                        <Avatar 
                            class="card-avatar" 
                            slot="" 
                            src={ props.user.src } 
                            alt={ props.user.alt }/>
                    </IonCol>
                    <IonCol>
                        <IonCardHeader>
                            <IonCardTitle>{ props.user.name }</IonCardTitle>
                            <IonCardSubtitle>{ props.user.description }</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCol>
                </IonRow>
            </IonGrid>
    
            <IonCardContent>{props.description}</IonCardContent>
            
            <figure>
                <img alt={props.img.alt} src={props.img.src} />
            </figure>
            
            <section className="cd-pub-button">
                <IonButton size="small" fill="clear">
                    <IonIcon size="small" icon={thumbsUpOutline}/>
                    <IonLabel>Gostei</IonLabel>
                </IonButton>
                <IonButton size="small" fill="clear">
                    <IonIcon size="small" icon={chatboxEllipsesOutline}/>
                    <IonLabel>Comentar</IonLabel>
                </IonButton>
                <IonButton size="small" fill="clear">
                    <IonIcon size="small" icon={arrowRedoOutline}/>
                    <IonLabel>Compartilhar</IonLabel>
                </IonButton>
                <IonButton size="small" fill="clear">
                    <IonIcon size="small" icon={paperPlaneOutline}/>
                    <IonLabel>Enviar</IonLabel>
                </IonButton>
            </section>
            
        </IonCard>
    );
}
export default CardPublicaction;