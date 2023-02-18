import {
    IonButton,
    IonCard, IonCol, IonGrid, IonIcon, IonInput,
    IonItem,
    IonLabel,
    IonRow
} from "@ionic/react";
import { attachOutline, happyOutline } from "ionicons/icons";
import perfil from '../assets/perfil.png';
import Avatar from "./avatar.component";
import "./card-post.component.css";

function CardPost() {
    return (
        <IonCard>
            <IonGrid>
                <IonRow>
                    <IonCol size="2" class="flex-center">
                        <Avatar 
                            class="post-avatar"
                            slot="" 
                            src={perfil}
                            alt="perfil"/>
                    </IonCol>
                    <IonCol size="10">
                        <IonItem class="cd-post-inp" fill="outline">
                            <IonButton size="small" class="cd-post-inp-bt" fill="clear" slot="start">
                                <IonIcon color="dark" slot="icon-only" icon={happyOutline}/> 
                            </IonButton>
                            <IonLabel position="floating">Começar publicação</IonLabel>
                            <IonInput></IonInput>
                            <IonButton size="small" class="cd-post-inp-bt" fill="clear" slot="end">
                                <IonIcon color="dark" slot="icon-only" icon={attachOutline}/>
                            </IonButton>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow class="flex-end">
                    <IonButton fill="clear" size="large">
                        <IonLabel>PUBLICAR</IonLabel>
                    </IonButton>
                </IonRow>
            </IonGrid>
        </IonCard>
    );
}
export default CardPost;
